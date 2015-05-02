"use strict";

(function () {
  var remote = require('remote');
  if (remote.getGlobal('reactDevMode') == true) {
    var BrowserWindow = remote.require('browser-window');
    BrowserWindow.addDevToolsExtension('./vendor/react-devtools');
  }
})()

require("babel/register");
require('./src/app/index');
