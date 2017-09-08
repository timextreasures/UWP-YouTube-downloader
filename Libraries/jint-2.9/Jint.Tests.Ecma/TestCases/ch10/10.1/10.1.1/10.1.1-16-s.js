/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch10/10.1/10.1.1/10.1.1-16-s.js
 * @description Strict Mode - Function code that is part of a FunctionExpression is strict function code if FunctionExpression is contained in use strict
 * @noStrict
 */


function testcase() {
        "use strict";
        return function () {
            try {
                eval("var public = 1;");
                return false;
            } catch (e) {
                return e instanceof SyntaxError;
            }
        } ();
    }
runTestCase(testcase);
