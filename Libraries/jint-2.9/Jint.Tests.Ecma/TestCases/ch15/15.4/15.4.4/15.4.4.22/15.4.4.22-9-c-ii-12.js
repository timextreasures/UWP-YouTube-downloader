/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-9-c-ii-12.js
 * @description Array.prototype.reduceRight - callbackfn is called with 3 formal parameter
 */


function testcase() {

        var testResult = false;
        var arr = [11, 12, 13];
        var initVal = 6.99;

        function callbackfn(prevVal, curVal, idx) {
            if (idx === 2) {
                testResult = (prevVal === initVal);
            }
            return curVal > 10 && arguments[3][idx] === curVal;
        }

        return arr.reduceRight(callbackfn, initVal) === true && testResult;
    }
runTestCase(testcase);
