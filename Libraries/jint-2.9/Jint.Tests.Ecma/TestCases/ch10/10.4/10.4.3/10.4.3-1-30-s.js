/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch10/10.4/10.4.3/10.4.3-1-30-s.js
 * @description Strict Mode - checking 'this' (FunctionDeclaration defined within a FunctionExpression inside strict mode)
 * @onlyStrict
 */
    
function testcase() {
"use strict";
var f1 = function () {
    function f() {
        return typeof this;
    }
    return (f()==="undefined") && ((typeof this)==="undefined");
}
return f1();
}
runTestCase(testcase);