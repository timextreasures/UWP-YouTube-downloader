/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-580.js
 * @description ES5 Attributes - Inherited property is enumerable (Boolean instance)
 */


function testcase() {
        var data = "data";
        try {
            Object.defineProperty(Boolean.prototype, "prop", {
                get: function () {
                    return data;
                },
                set: function (value) {
                    data = value;
                },
                enumerable: true,
                configurable: true
            });
            var boolObj = new Boolean();
            var verifyEnumerable = false;
            for (var p in boolObj) {
                if(p === "prop") {
                    verifyEnumerable = true;
                }
            }

            return !boolObj.hasOwnProperty("prop") && verifyEnumerable;
        } finally {
            delete Boolean.prototype.prop;
        }
    }
runTestCase(testcase);
