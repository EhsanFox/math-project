/* eslint consistent-return: off */
import { app, BrowserWindow, IpcMain } from 'electron';
import path from 'path';
import { information } from './constants';
import Logger from './logger';

export type iExtensions = unknown | any;

export default class Extensions {
  readonly storages = {};
  private readonly extensions: Map<string, iExtensions> = new Map();
  constructor(
    private readonly window: BrowserWindow,
    private readonly ipc: IpcMain,
    private readonly log: Logger = new Logger(
      'extension',
      path.join(app.getPath('appData'), app.getName()),
      information.isDebug
    )
  ) {
    /*
    this.extensions.set(
      'discordrpc',
      new DiscordRPC('1093552127537840138', log)
    );
    */
  }

  getExtension<T = iExtensions>(name: string): T | undefined {
    if (!this.extensions.has(name)) return;

    return this.extensions.get(name) as unknown as T;
  }
}
