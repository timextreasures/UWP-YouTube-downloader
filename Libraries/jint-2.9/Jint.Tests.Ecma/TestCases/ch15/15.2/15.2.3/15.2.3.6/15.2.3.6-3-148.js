/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-148.js
 * @description Object.defineProperty - 'Attributes' is an Error object that uses Object's [[Get]] method to access the 'value' property  (8.10.5 step 5.a)
 */


function testcase() {
        var obj = {};

        var errObj = new Error();

        errObj.value = "Error";

        Object.defineProperty(obj, "property", errObj);

        return obj.property === "Error";
    }
runTestCase(testcase);
