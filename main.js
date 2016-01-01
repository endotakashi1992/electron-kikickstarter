'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var client = require('electron-connect').client;

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 600,
    height: 600
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();

  // Connect to server process
  client.create(mainWindow);
});
