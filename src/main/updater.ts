import { BrowserWindow } from 'electron';
import {
  NsisUpdater,
  AppImageUpdater,
  MacUpdater,
  autoUpdater,
  AppUpdater as ElectronAppUpdater,
  Logger,
} from 'electron-updater';
import { updater } from './configs';
import { IPCEvents } from './constants';

export default class AppUpdater {
  private readonly engine:
    | NsisUpdater
    | AppImageUpdater
    | MacUpdater
    | ElectronAppUpdater;
  constructor(
    private readonly window: BrowserWindow,
    private readonly log: Logger,
    private readonly config: typeof updater = updater
  ) {
    switch (process.platform) {
      case 'win32':
        this.engine = new NsisUpdater(this.config as any);
        break;

      case 'darwin':
        this.engine = new MacUpdater(this.config as any);
        break;

      case 'linux':
        this.engine = new AppImageUpdater(this.config as any);
        break;

      default:
        this.engine = autoUpdater;
        break;
    }

    this.engine.logger = this.log;

    this.engine.on('update-not-available', () =>
      this.window.webContents.send(IPCEvents.appUpdateNotAvailable)
    );
    this.engine.on('checking-for-update', () =>
      this.window.webContents.send(IPCEvents.checkingForUpdate)
    );
    this.engine.on('update-available', (info) =>
      this.window.webContents.send(IPCEvents.appUpdateAvailable, info)
    );
    this.engine.on('download-progress', (info) =>
      this.window.webContents.send(IPCEvents.appUpdateDownloading, info)
    );
    this.engine.on('update-downloaded', () =>
      this.window.webContents.send(IPCEvents.appUpdateFinished)
    );
    this.engine.on('error', (err) =>
      this.window.webContents.send(IPCEvents.error, err)
    );
  }
}
