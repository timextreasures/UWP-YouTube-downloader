/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-4-7.js
 * @description Allow reserved words as property names by set function within an object, verified with hasOwnProperty: while, debugger, function
 */


function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set while(value){
                test0 = value;
            },
            get while(){
                return test0
            },
            set debugger(value){
                test1 = value;
            },
            get debugger(){
                return test1;
            },
            set function(value){
                test2 = value;
            },
            get function(){
                return test2;
            }
        };      
        var arr = [
            'while' ,
            'debugger', 
            'function'
            ];
        for(var p in tokenCodes) {       
            for(var p1 in arr) {                
                if(arr[p1] === p) {
                    if(!tokenCodes.hasOwnProperty(arr[p1])) {
                        return false;
                    };
                }
            }
        }
        return true;
    }
runTestCase(testcase);
