/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-384.js
 * @description ES5 Attributes - [[Value]] attribute of data property is a boolean
 */


function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: false
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.prop === false && desc.value === false;
    }
runTestCase(testcase);
