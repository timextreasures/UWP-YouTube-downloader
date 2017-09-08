// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Object.prototype.propertyIsEnumerable.length property has the attribute DontDelete
 *
 * @path ch15/15.2/15.2.4/15.2.4.7/S15.2.4.7_A9.js
 * @description Checking if deleting the Object.prototype.propertyIsEnumerable.length property fails
 */

//CHECK#0
if (!(Object.prototype.propertyIsEnumerable.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.propertyIsEnumerable has length property');
}

//CHECK#1
if (delete Object.prototype.propertyIsEnumerable.length) {
  $ERROR('#1: The Object.prototype.propertyIsEnumerable.length property has the attributes DontDelete');
}
//

