// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.getUTCFullYear property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.11/S15.9.5.11_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.getUTCFullYear.length;
Date.prototype.getUTCFullYear.length = 1;
if (Date.prototype.getUTCFullYear.length !== x) {
  $ERROR('#1: The Date.prototype.getUTCFullYear.length has the attribute ReadOnly');
}


