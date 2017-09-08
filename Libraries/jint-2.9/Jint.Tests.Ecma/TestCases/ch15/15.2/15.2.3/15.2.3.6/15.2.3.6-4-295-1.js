/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-295-1.js
 * @description Object.defineProperty - 'O' is an Arguments object of a function that has formal parameters, 'name' is own data property of 'O' which is also defined in [[ParameterMap]] of 'O', test TypeError is thrown when updating the [[Enumerable]] attribute value of 'name' which is defined as non-configurable (10.6 [[DefineOwnProperty]] step 4 and step 5b)
 */


function testcase() {
        return (function (a, b, c) {
            Object.defineProperty(arguments, "0", {
                value: 10,
                writable: false,
                enumerable: true,
                configurable: false
            });
            try {
                Object.defineProperty(arguments, "0", {
                    enumerable: false
                });
            } catch (e) {
                var verifyFormal = a === 10;
                return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, "0", 10, false, true, false) && verifyFormal;
            }
            return false;
        }(0, 1, 2));
    }
runTestCase(testcase);
