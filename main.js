'use strict'

// Import parts of electron to use
const { app } = require('electron')
const path = require('path')
const url = require('url')
const { menubar } = require('menubar');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false;

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

let indexPath;

if (dev && process.argv.indexOf('--noDevServer') === -1) {
  indexPath = url.format({
    protocol: 'http:',
    host: 'localhost:8080',
    pathname: 'index.html',
    slashes: true
  })
} else {
  indexPath = url.format({
    protocol: 'file:',
    pathname: path.join(__dirname, 'dist', 'index.html'),
    slashes: true
  })
}

const mb = menubar({
  index: indexPath,
  browserWindow: {
    alwaysOnTop: dev,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }
});

mb.on('ready', () => {
  console.log('Menu bar ready!')
});
