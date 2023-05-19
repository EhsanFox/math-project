/* eslint global-require: off */

import path from 'path';

import { BrowserWindow, IpcMain, type Shell, type App } from 'electron';

import elogger from 'electron-log';
import electronDebug from 'electron-debug';

import { ElectronUtils } from './utils';
import IPCHandler from './ipc';
import AppUpdater from './updater';
import Logger from './logger';
import Storage from './storages/base.storage';
import Extensions from './extension';
import MenuManager from './menu';
import NotificationCenter from './notification';
import { MainStorage } from './storages';
import { IStoreData } from 'types';

export default class AppWindow {
  readonly isDebug: boolean =
    process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';
  readonly RESOURCES_PATH: string;
  readonly PRELOAD_PATH: string;
  readonly utils: ElectronUtils = new ElectronUtils();
  private storage: Storage = MainStorage;
  private extension: Extensions | undefined;
  readonly elog: typeof elogger = elogger;
  private ipcs: IPCHandler | undefined;
  private menus: MenuManager | undefined;
  private notifications: NotificationCenter | undefined;
  private updater: AppUpdater | undefined;
  private eventsStarted: boolean = false;

  constructor(
    private readonly app: App,
    private readonly ipc: IpcMain,
    private readonly shell: Shell,
    private readonly log: Logger,
    private mainWindow?: BrowserWindow | undefined
  ) {
    if (!this.app) throw new Error(`Electron App is required.`);

    this.notifications = new NotificationCenter(log);

    this.elog.transports.file.level = 'info';

    this.RESOURCES_PATH = this.app.isPackaged
      ? path.join(process.resourcesPath, 'assets')
      : path.join(__dirname, '../../assets');

    this.PRELOAD_PATH = this.app.isPackaged
      ? path.join(__dirname, 'preload.js')
      : path.join(__dirname, '../../.erb/dll/preload.js');
  }

  private getAsset(...files: string[]) {
    return this.utils.getAssetPath(this.RESOURCES_PATH, ...files);
  }

  private destroy() {
    this.mainWindow = undefined;
    this.eventsStarted = false;
  }

  async buildWindow() {
    if (this.status() && this.eventsStarted) return;

    this.mainWindow = new BrowserWindow(
      this.utils.getConfig(
        'main',
        this.getAsset('icon.png'),
        this.PRELOAD_PATH,
        !this.app.isPackaged
      )
    );

    const filePath = this.utils.resolveHtmlPath('index.html');
    this.mainWindow.loadURL(filePath);
    console.log(`loading file: ${filePath}`);

    // Open urls in the user's browser
    this.mainWindow.webContents.setWindowOpenHandler((edata) => {
      this.shell.openExternal(edata.url);
      return { action: 'deny' };
    });

    this.ipcs = new IPCHandler(this.mainWindow as BrowserWindow, this.ipc);
    this.extension = new Extensions(this.mainWindow, this.ipc);
    this.menus = new MenuManager(this.mainWindow as BrowserWindow);

    if (this.eventsStarted) this.loadEvents(true);
    else this.loadEvents();

    if (this.isDebug) {
      await this.utils.installExtensions();
      electronDebug.openDevTools(this.mainWindow);
      setTimeout(
        () => this.mainWindow!.webContents.send('update-not-available'),
        10000
      );
    } else {
      /*
      this.updater = new AppUpdater(
        this.mainWindow as BrowserWindow,
        this.elog,
        this.utils.getConfig('updater')
      );
      */
    }
  }

  status(arg = this.mainWindow): arg is BrowserWindow {
    return typeof this.mainWindow !== 'undefined';
  }

  loadEvents(force = false) {
    if (!this.status())
      throw new Error(
        `Window is either destroyed or not ready to listen to events.`
      );
    if (this.eventsStarted && !force) return;

    this.mainWindow!.on('ready-to-show', () => {
      if (!this.status()) throw new Error('"mainWindow" is not defined');

      if (process.env.START_MINIMIZED) {
        this.mainWindow!.minimize();
      } else {
        this.mainWindow!.show();
      }
    });

    this.mainWindow!.on('close', () => {
      this.storage.set<IStoreData['windows']>('windows', {
        ...this.mainWindow!.getBounds(),
        isMaximized: this.mainWindow!.isMaximized(),
      });
    });

    this.mainWindow!.on('closed', () => {
      this.destroy();
    });

    this.mainWindow!.on('maximize', () =>
      this.mainWindow!.webContents.send('maximize')
    );
    this.mainWindow!.on('unmaximize', () =>
      this.mainWindow!.webContents.send('unmaximize')
    );

    this.eventsStarted = true;
  }
}
