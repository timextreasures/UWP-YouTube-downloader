/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * This test is actually testing the [[Delete]] internal method (8.12.8). Since the
 * language provides no way to directly exercise [[Delete]], the tests are placed here.
 *
 * @path ch11/11.4/11.4.1/11.4.1-4.a-9-s.js
 * @description delete operator throws TypeError when deleting a non-configurable data property (Math.LN2) in strict mode 
 * @onlyStrict
 */


function testcase() {
  'use strict';
  
  try {
    delete Math.LN2;
    return false;
  }
  catch (e) {
    return (e instanceof TypeError); 
  }
 }
runTestCase(testcase);
