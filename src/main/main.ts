/* eslint global-require: off, no-console: off, promise/always-return: off, promise/no-nesting: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import { app, shell, ipcMain } from 'electron';
import path from 'path';
import Logger from './logger';
import AppWindow from './windows';

const isDebug: boolean =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const logger = new Logger(
  'main',
  path.join(app.getPath('appData'), app.getName()),
  isDebug
);
const window = new AppWindow(app, ipcMain, shell, logger);

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    window
      .buildWindow()
      .then(() => {
        app.on('activate', () => {
          // On macOS it's common to re-create a window in the app when the
          // dock icon is clicked and there are no other windows open.
          if (!window.status()) window.buildWindow();
        });
      })
      .catch(console.log);
  })
  .catch(console.log);
