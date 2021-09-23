---
title: TinyDatabase API
sidebar_position: 1
description: A lightweight database library for microcontroller. 
---

# TinyDatabase API

Let's discover **TinyDatabase in less than 5 minutes**.

## Overview

TinyDatabase is a library that encapsulate EEPROM manipulation. It allows user to work with a high level and simple syntax to access data stored in
microcontroller memory, integrated circuit or others modules memory like
RTC. Instead of use index (0, 1, 3, ...) and interate over these index to get data from their persistent memory user can directly write queries like
some `SQL` queries.

### Example

```cpp title="example"
#include <TinyDatabase_Arduino.h>

// MemoryManager object to access data base
MemoryManager mem;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  delay(1000);

  int age[6];
  float rate[6];
  int nbValue = 0;

  int max_value = 28;
  
  mem.FROM("EM")
    .WHERE("ag", FILTER::isLessThan, &max_value)
    .SELECT_ALL("ag", age, nbValue)
    .SELECT_ALL("rt", rate, nbValue)
    .DONE();

  for (size_t i = 0; i < nbValue; i++) {
    PRINT("-read-", i);
    PRINT("age", age[i]);
    PRINT("rate", rate[i]);
    
    Serial.println();
  }

}

void loop() {
  // put your main code here, to run repeatedly:
}
```

## Installation

We are working to make it available on the Arduino Libraries Manager.
But you can quickly test it by:

1. Clone the library at this url: [TinyDatabase_Arduino](https://github.com/TawalMc/TinyDatabase_Arduino)

2. In your Arduino IDE, 
	- go to `Sketch`
	- select `Include Library`
	- select `Add .ZIP Library` and choose the TinyDatabase_Arduino zip that you download previously 

3. In Arduino Examples, you will find some useful examples on this library that you can test.

## Architecture

### Target
Our goal is to make TinyDatabase available on the maximum of boards with internal storage. So we can provide a high level api.
Currently, this library is tested on:

- Arduino board with AVR ATmega 328p

We plan to write a version for `RTC` (clock module) which has more memory.

## Contributor

`This library was built and maintained by` [Tawaliou ALAO](https://github.com/TawalMc)` Engineer at YoupiLab`. 

- _Thanks to my brother ALIDOU Abdoul Majeed who help me to define the database architecture_

- _Thanks to [YoupiLab](https://youpilab.com/) to support the project_

- [Here is the documentation](https://tinydatabase-doc.vercel.app/)