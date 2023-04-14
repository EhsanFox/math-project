/* eslint global-require: off, no-console: off, promise/always-return: off, class-methods-use-this: off */
import { URL } from 'url';
import path from 'path';

import * as cfgs from './configs';

export class ElectronUtils {
  constructor(private readonly configList: Record<string, unknown> = cfgs) {}

  getConfig(name: string, ...args: unknown[]) {
    if (!this.configList[name])
      throw new Error(`Config for ${name} doesn't exist.`);

    const config = this.configList[name];
    if (typeof config === 'function' && args) return config(...args);

    return config;
  }

  resolveHtmlPath(htmlFileName: string): string {
    if (process.env.NODE_ENV === 'development') {
      const port = process.env.PORT || 1212;
      const url = new URL(`http://localhost:${port}`);
      url.pathname = htmlFileName;
      return url.href;
    }
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
  }

  getAssetPath(resourcesPath: string, ...paths: string[]): string {
    return path.join(resourcesPath, ...paths);
  }

  async installExtensions(
    installer: {
      default: (exts: unknown, forceDl: boolean) => Promise<unknown>;
    } & Record<string, unknown> = require('electron-devtools-installer'),
    extensions: string[] = ['REACT_DEVELOPER_TOOLS'],
    forceDownload = false
  ): Promise<unknown | void> {
    // const installer = require('electron-devtools-installer');
    // const extensions = ['REACT_DEVELOPER_TOOLS'];

    return installer
      .default(
        extensions.map((name) => installer[name]),
        forceDownload
      )
      .catch(console.log);
  }
}
export default new ElectronUtils();
