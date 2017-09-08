/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-8-c-4.js
 * @description Array.prototype.reduce doesn't throw error when array has no own properties but prototype contains a single property
 */


function testcase() {

        var arr = [, , , ];

        try {
            Array.prototype[1] = "prototype";
            arr.reduce(function () { });
            return true;
        } catch (ex) {
            return false;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);
