/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.20/15.4.4.20-3-28.js
 * @description Array.prototype.filter - value of 'length' is boundary value (2^32)
 */


function testcase() {

        var accessed = false;
        function callbackfn(val, idx, obj) {
            accessed = true;
            return true;
        }

        var obj = {
            0: 12,
            length: 4294967296
        };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return !accessed && newArr.length === 0;
    }
runTestCase(testcase);
