// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator x & y returns ToNumber(x) & ToNumber(y)
 *
 * @path ch11/11.10/11.10.1/S11.10.1_A3_T2.6.js
 * @description Type(x) is different from Type(y) and both types vary between String (primitive or object) and Undefined
 */

//CHECK#1
if (("1" & undefined) !== 0) {
  $ERROR('#1: ("1" & undefined) === 0. Actual: ' + (("1" & undefined)));
}

//CHECK#2
if ((undefined & "1") !== 0) {
  $ERROR('#2: (undefined & "1") === 0. Actual: ' + ((undefined & "1")));
}

//CHECK#3
if ((new String("1") & undefined) !== 0) {
  $ERROR('#3: (new String("1") & undefined) === 0. Actual: ' + ((new String("1") & undefined)));
}

//CHECK#4
if ((undefined & new String("1")) !== 0) {
  $ERROR('#4: (undefined & new String("1")) === 0. Actual: ' + ((undefined & new String("1"))));
}

