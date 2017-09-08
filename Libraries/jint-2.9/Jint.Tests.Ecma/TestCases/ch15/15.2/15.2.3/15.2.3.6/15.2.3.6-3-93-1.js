/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-93-1.js
 * @description Object.defineProperty - 'Attributes' is an RegExp object that uses Object's [[Get]] method to access the 'configurable' property (8.10.5 step 4.a)
 */


function testcase() {
        var obj = {};
        try {
            RegExp.prototype.configurable = true;
            var regObj = new RegExp();

            Object.defineProperty(obj, "property", regObj);

            var beforeDeleted = obj.hasOwnProperty("property");

            delete obj.property;

            var afterDeleted = obj.hasOwnProperty("property");

            return beforeDeleted === true && afterDeleted === false;
        } finally {
            delete RegExp.prototype.configurable;
        }
    }
runTestCase(testcase);
