/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-540-7.js
 * @description Object.defineProperty fails to update [[Get]] and [[Set]] attributes of a named property 'P' whose [[Configurable]] attribute is false and throws TypeError exception, 'A' is an Array object (8.12.9 step 11.a)
 */


function testcase() {
        var obj = [];

        obj.verifySetFunction = "data";
        var getFunc = function () {
            return obj.verifySetFunction;
        };
        var setFunc = function (value) {
            obj.verifySetFunction = value;
        };
        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            configurable: false
        });

        var result = false;
        try {
            Object.defineProperty(obj, "prop", {
                get: function () {
                    return 100;
                }
            });
        } catch (e) {
            result = e instanceof TypeError &&
                accessorPropertyAttributesAreCorrect(obj, "prop", getFunc, setFunc, "verifySetFunction", false, false);
        }

        try {
            Object.defineProperty(obj, "prop", {
                set: function (value) {
                    obj.verifySetFunction1 = value;
                }
            });
        } catch (e1) {
            return result && e1 instanceof TypeError &&
                accessorPropertyAttributesAreCorrect(obj, "prop", getFunc, setFunc, "verifySetFunction", false, false);
        }
    }
runTestCase(testcase);
