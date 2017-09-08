// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * {} within the "if" expression is not allowed
 *
 * @path ch12/12.5/S12.5_A11.js
 * @description Checking if execution of "if({1})" fails
 * @negative
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if({1})
  {
    ;
  }else
  {
    ;
  }
//
//////////////////////////////////////////////////////////////////////////////

