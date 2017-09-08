/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-10.js
 * @description Object.defineProperties - 'enumerable' property of 'descObj' is own data property that overrides an inherited data property (8.10.5 step 3.a)
 */


function testcase() {

        var obj = {};
        var accessed = false;

        var proto = {
            enumerable: true
        };

        var Con = function () { };
        Con.prototype = proto;
        var descObj = new Con();

        Object.defineProperty(descObj, "enumerable", {
            value: false
        });

        Object.defineProperties(obj, {
            prop: descObj
        });
        for (var property in obj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return !accessed;
    }
runTestCase(testcase);
