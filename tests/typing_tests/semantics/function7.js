/*******************************************************************************
    Copyright (c) 2012, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
 ******************************************************************************/

var f = function() {
}

var o = new f();
o.constructor = 20;

var __result1 = o.constructor;
var __expect1 = 20;

