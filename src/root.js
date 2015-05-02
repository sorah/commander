"use strict";

(function () {
  var remote = require('remote');
  if (remote.getGlobal('reactDevMode') == true) {
    var BrowserWindow = remote.require('browser-window');
    console.log(BrowserWindow.addDevToolsExtension('./vendor/react-devtools'));
  }
})()

require("babel/register");
require('./src/index');
