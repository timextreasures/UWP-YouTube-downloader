/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-55.js
 * @description Object.defineProperties - both desc.writable and P.writable are boolean values with the same value (8.12.9 step 6)
 */


function testcase() {

        var obj = {};

        var desc = { writable: false };
        Object.defineProperty(obj, "foo", desc);

        Object.defineProperties(obj, {
            foo: {
                writable: false
            }
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", undefined, false, false, false);
    }
runTestCase(testcase);
