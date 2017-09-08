// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * String.prototype.indexOf can't be used as constructor
 *
 * @path ch15/15.5/15.5.4/15.5.4.7/S15.5.4.7_A7.js
 * @description Checking if creating the String.prototype.indexOf object fails
 */

var __FACTORY = String.prototype.indexOf;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: var __FACTORY = String.prototype.indexOf; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: var __FACTORY = String.prototype.indexOf; "__instance = new __FACTORY" throw a TypeError. Actual: ' + (e));  
  }
  $PRINT(e);
}

