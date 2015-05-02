var app = require('app');
var BrowserWindow = require('browser-window');
var fs = require('fs');

try {
  fs.statSync('./vendor/react-devtools');
  reactDevMode = true;
} catch(e) {
  console.log(e);
  reactDevMode = false;
}

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() { 
    mainWindow = null;
  }); 
});
