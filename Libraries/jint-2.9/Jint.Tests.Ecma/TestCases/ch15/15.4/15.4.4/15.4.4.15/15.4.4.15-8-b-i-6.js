/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-b-i-6.js
 * @description Array.prototype.lastIndexOf - element to be retrieved is own data property that overrides an inherited accessor property on an Array-like object
 */


function testcase() {

        try {
            Object.defineProperty(Object.prototype, "0", {
                get: function () {
                    return false;
                },
                configurable: true
            });
            return 0 === Array.prototype.lastIndexOf.call({ 0: true, 1: 1, length: 2 }, true);
        } finally {
            delete Object.prototype[0];
        }
    }
runTestCase(testcase);
