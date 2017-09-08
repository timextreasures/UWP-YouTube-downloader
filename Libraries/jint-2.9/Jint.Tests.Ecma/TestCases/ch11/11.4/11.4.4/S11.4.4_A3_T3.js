// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Operator ++x returns x = ToNumber(x) + 1
 *
 * @path ch11/11.4/11.4.4/S11.4.4_A3_T3.js
 * @description Type(x) is string primitive or String object
 */

//CHECK#1
var x = "1"; 
++x;
if (x !== 1 + 1) {
  $ERROR('#1: var x = "1"; ++x; x === 1 + 1. Actual: ' + (x));
}

//CHECK#2
var x = "x"; 
++x; 
if (isNaN(x) !== true) {
  $ERROR('#2: var x = "x"; ++x; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#3
var x = new Number("-1"); 
++x;
if (x !== -1 + 1) {
  $ERROR('#3: var x = new String("-1"); ++x; x === -1 + 1. Actual: ' + (x));
}

