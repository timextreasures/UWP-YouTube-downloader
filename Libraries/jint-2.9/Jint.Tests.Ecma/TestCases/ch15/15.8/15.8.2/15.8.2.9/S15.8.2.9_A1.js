// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If x is NaN, Math.floor(x) is NaN
 *
 * @path ch15/15.8/15.8.2/15.8.2.9/S15.8.2.9_A1.js
 * @description Checking if Math.floor(NaN) is NaN
 */

// CHECK#1
var x = NaN;
if (!isNaN(Math.floor(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.floor(x)) === false'");
}

