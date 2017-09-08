/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.4/15.3.4.5.1/15.3.4.5.1-4-4.js
 * @description [[Call]] - length of parameters of 'target' is 0, length of 'boundArgs' is 0, length of 'ExtraArgs' is 0, and without 'boundThis'
 */


function testcase() {
        var func = function () {
            return arguments.length === 0;
        };

        var newFunc = Function.prototype.bind.call(func);

        return newFunc();
    }
runTestCase(testcase);
