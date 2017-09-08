/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-611.js
 * @description ES5 Attributes - all attributes in Function.prototype.bind are correct
 */


function testcase() {
        var desc = Object.getOwnPropertyDescriptor(Function.prototype, "bind");

        var propertyAreCorrect = (desc.writable === true && desc.enumerable === false && desc.configurable === true);

        var temp = Function.prototype.bind;

        try {
            Function.prototype.bind = "2010";

            var isWritable = (Function.prototype.bind === "2010");

            var isEnumerable = false;

            for (var prop in Function.prototype) {
                if (prop === "bind") {
                    isEnumerable = true;
                }
            }
        
            delete Function.prototype.bind;

            var isConfigurable = !Function.prototype.hasOwnProperty("bind");

            return propertyAreCorrect && isWritable && !isEnumerable && isConfigurable;
        } finally {
            Object.defineProperty(Function.prototype, "bind", {
                value: temp,
                writable: true,
                enumerable: false,
                configurable: true
            });
        }
    }
runTestCase(testcase);
