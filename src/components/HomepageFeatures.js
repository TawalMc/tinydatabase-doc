import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/cpu.svg').default,
    description: (
      <>
        TinyDatabase is designed with the mind to make easy the access to
        persistent data on microcontroller and others boards with internal
        storage.
      </>
    ),
  },
  {
    title: 'Friendly syntax',
    Svg: require('../../static/img/server.svg').default,
    description: (
      <>
        If you know <code>SQL</code> queries, let's say you know how to use TinyDatabase. 
        Don't need to use <code>EEPROM index</code> anymore to queries data.
      </>
    ),
  },
  {
    title: 'Powered by C++',
    Svg: require('../../static/img/protest.svg').default,
    description: (
      <>
        One single header file written in <code>C++</code> to manage your data on 
        AVR boards and RTC modules.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
