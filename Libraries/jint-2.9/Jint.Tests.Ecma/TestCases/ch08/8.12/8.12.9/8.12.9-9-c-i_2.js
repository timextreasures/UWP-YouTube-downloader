/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch08/8.12/8.12.9/8.12.9-9-c-i_2.js
 * @description Redefine a configurable accessor property to be a data property on a non-extensible object
 */


function testcase() {
    var o = {};
    Object.defineProperty(o, "foo", 
                          { get: function() { return 5;}, 
                            configurable: true});
    Object.preventExtensions(o);
    Object.defineProperty(o, "foo", 
                          { value: "hello",
                            writable: true});

    var fooDescrip = Object.getOwnPropertyDescriptor(o, "foo");
    return o.foo==="hello" && fooDescrip.get===undefined && fooDescrip.set===undefined && fooDescrip.value==="hello" && fooDescrip.configurable===true && fooDescrip.enumerable===false && fooDescrip.writable===true;
}
runTestCase(testcase);
