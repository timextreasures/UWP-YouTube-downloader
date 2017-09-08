/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-1-1.js
 * @description Array.prototype.some applied to undefined throws a TypeError
 */


function testcase() {
        try {
            Array.prototype.some.call(undefined);
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);
