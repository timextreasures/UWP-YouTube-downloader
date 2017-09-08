/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-8-c-i-30.js
 * @description Array.prototype.map - unhandled exceptions happened in getter terminate iteration on an Array-like object
 */


function testcase() {

        var obj = { 0: 11, 5: 10, 10: 8, length: 20 };
        var accessed = false;

        function callbackfn(val, idx, obj) {
            if (idx > 1) {
                accessed = true;
            }
        }

        Object.defineProperty(obj, "1", {
            get: function () {
                throw new RangeError("unhandle exception happened in getter");
            },
            configurable: true
        });

        Object.defineProperty(obj, "2", {
            get: function () {
                accessed = true;
                return 100;
            },
            configurable: true
        });

        try {
            Array.prototype.map.call(obj, callbackfn);
            return false;
        } catch (ex) {
            return (ex instanceof RangeError) && !accessed;
        }
    }
runTestCase(testcase);
