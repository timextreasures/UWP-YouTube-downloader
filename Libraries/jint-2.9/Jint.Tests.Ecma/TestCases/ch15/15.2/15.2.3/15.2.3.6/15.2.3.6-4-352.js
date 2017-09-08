/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-352.js
 * @description ES5 Attributes - fail to update [[Configurable]] attribute of data property ([[Writable]] is true, [[Enumerable]] is false, [[Configurable]] is false) to different value
 */


function testcase() {
        var obj = {};

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: true,
            enumerable: false,
            configurable: false
        });

        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        try {
            Object.defineProperty(obj, "prop", {
                configurable: true
            });
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
            return propertyDefineCorrect && desc1.configurable === false && obj.prop === 2010 && desc2.configurable === false && e instanceof TypeError;
        }
    }
runTestCase(testcase);
