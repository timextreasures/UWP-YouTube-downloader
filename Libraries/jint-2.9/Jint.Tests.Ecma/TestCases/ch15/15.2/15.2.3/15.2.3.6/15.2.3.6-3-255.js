/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-255.js
 * @description Object.defineProperty - 'Attributes' is a RegExp object that uses Object's [[Get]] method to access the 'set' property (8.10.5 step 8.a)
 */


function testcase() {
        var obj = {};
        var data = "data";
        var regObj = new RegExp();

        regObj.set = function (value) {
            data = value;
        };

        Object.defineProperty(obj, "property", regObj);
        obj.property = "overrideData";

        return obj.hasOwnProperty("property") && data === "overrideData";
    }
runTestCase(testcase);
