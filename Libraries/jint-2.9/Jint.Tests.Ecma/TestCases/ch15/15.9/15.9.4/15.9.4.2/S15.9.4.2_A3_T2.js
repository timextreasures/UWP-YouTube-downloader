// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.4/15.9.4.2/S15.9.4.2_A3_T2.js
 * @description Checking DontDelete attribute
 */

if (delete Date.parse.length  !== false) {
  $ERROR('#1: The Date.parse.length property has the attributes DontDelete');
}

if (!Date.parse.hasOwnProperty('length')) {
  $FAIL('#2: The Date.parse.length property has the attributes DontDelete');
}


