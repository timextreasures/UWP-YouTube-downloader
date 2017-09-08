/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-7.js
 * @description Array.prototype.lastIndexOf must return correct index (self reference)
 */


function testcase() {
  var a = new Array(0,1,2,3);  
  a[2] = a;
  if (a.lastIndexOf(a) === 2 &&  
      a.lastIndexOf(3) === 3 ) 
  {
    return true;
  }
 }
runTestCase(testcase);
