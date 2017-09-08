// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The | regular expression operator separates two alternatives.
 * The pattern first tries to match the left Alternative (followed by the sequel of the regular expression).
 * If it fails, it tries to match the right Disjunction (followed by the sequel of the regular expression)
 *
 * @path ch15/15.10/15.10.2/15.10.2.3/S15.10.2.3_A1_T13.js
 * @description Execute /(.)..|abc/.exec("abc") and check results
 */

__executed = /(.)..|abc/.exec("abc");

__expected = ["abc","a"];
__expected.index = 0;
__expected.input = "abc";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(.)..|abc/.exec("abc"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(.)..|abc/.exec("abc"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(.)..|abc/.exec("abc"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(.)..|abc/.exec("abc"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


