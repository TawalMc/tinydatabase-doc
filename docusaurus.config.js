const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'TinyDatabase',
  tagline: 'An easy way to manipulate EEPROM data on electronic boards',
  url: 'https://tinydatabase-doc.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TawalMc', // Usually your GitHub org/user name.
  projectName: 'TinyDatabase', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/TawalMc/tinydatabase-doc/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TawalMc/tinydatabase-doc/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TinyDatabase',
        logo: {
          alt: 'My Site Logo',
          src: 'img/TinyDatabase-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/TawalMc/tinydatabase-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'API',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            /* items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ], */
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'TinyDatabase_Arduino - GitHub',
                href: 'https://github.com/TawalMc/TinyDatabase_Arduino',
              },
              {
                label: 'Tawal Dev Universe',
                href: 'https://tawaldevuniverse.vercel.app/',
              },
              {
                label: 'YoupiLab',
                href: 'https://youpilab.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TinyDatabase doc supported by YoupiLab and generated with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
