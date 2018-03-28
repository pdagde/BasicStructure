/**
 * Created by Pravin on 12/04/17.
 */

'use strict';

var auth = require("./server_side/controller/api/auth/auth.js");
// var events = require("./server_side/controller/api/events/createevents.js")

// E:\codebase\crive3\calenderCode\calender\server_side\controller\api\events\createevents.js

module.exports.register = function(router){

 router.route('/auth/signUp').post(auth.signUp);
 

  console.log('routes registered..!');
};

