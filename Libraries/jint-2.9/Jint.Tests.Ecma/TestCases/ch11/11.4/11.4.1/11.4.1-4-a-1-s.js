/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch11/11.4/11.4.1/11.4.1-4-a-1-s.js
 * @description Strict Mode - TypeError is thrown when deleting non-configurable data property
 * @onlyStrict
 */


function testcase() {
        "use strict";
        var obj = {};
        Object.defineProperty(obj, "prop", {
            value: "abc",
            configurable: false
        });

        try {
            delete obj.prop;
            return false;
        } catch (e) {
            return e instanceof TypeError && obj.prop === "abc";
        }
    }
runTestCase(testcase);
