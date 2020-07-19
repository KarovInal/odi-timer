'use strict'

// Import parts of electron to use
const { app, Tray, Menu } = require('electron')
const path = require('path')
const url = require('url')
const { menubar } = require('menubar');

// Keep a reference for dev mode
let dev = process.env.NODE_ENV === 'development';

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
  });
}

app.on('ready', () => {
  const mb = menubar({
    index: indexPath,
    showDockIcon: false,
    icon: path.join(__dirname, 'src/assets/icons', 'logoMenubarTemplate.png'),
    browserWindow: {
      frame: false,
      resizable: dev,
      width: 392,
      height: 600,
      webPreferences: {
        devTools: dev,
        nodeIntegration: true
      }
    }
  });

  mb.on('after-create-window', function() {
    const contextMenu = Menu.buildFromTemplate ([
      {label: 'Exit', click: () => mb.app.quit ()}
    ]);

    mb.tray.on ('right-click', () => {
      mb.tray.popUpContextMenu (contextMenu);
    });
  });
});
