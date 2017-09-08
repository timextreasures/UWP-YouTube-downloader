/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-214.js
 * @description Object.defineProperties - 'descObj' is the Arguments object which implements its own [[Get]] method to get 'get' property (8.10.5 step 7.a)
 */


function testcase() {
        var obj = {};

        var func = function (a, b) {
            arguments.get = function () {
                return "arguments";
            };

            Object.defineProperties(obj, {
                property: arguments
            });

            return obj.property === "arguments";
        };

        return func();
    }
runTestCase(testcase);
