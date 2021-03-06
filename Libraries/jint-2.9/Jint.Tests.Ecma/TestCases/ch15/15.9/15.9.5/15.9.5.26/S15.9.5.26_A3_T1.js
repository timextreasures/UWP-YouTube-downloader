// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.getTimezoneOffset property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.26/S15.9.5.26_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.getTimezoneOffset.length;
Date.prototype.getTimezoneOffset.length = 1;
if (Date.prototype.getTimezoneOffset.length !== x) {
  $ERROR('#1: The Date.prototype.getTimezoneOffset.length has the attribute ReadOnly');
}


