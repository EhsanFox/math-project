/* eslint no-else-return: off */
import {
  BrowserWindow,
  Menu,
  MenuItemConstructorOptions,
  ThumbarButton,
  Tray,
} from 'electron';
import { information } from '../constants';
import { MenuTemplate, iMenuOptions } from 'types';

export default class AppMenu {
  constructor(
    readonly name: string,
    private readonly type: 'tray' | 'menu' | 'context' | 'thumbar',
    readonly os: 'mac' | 'windows' | 'linux' | 'any',
    readonly template: MenuTemplate[] | ThumbarButton[],
    private readonly options: iMenuOptions = { setAppMenu: false }
  ) {}

  build(window: BrowserWindow, ...args: unknown[]) {
    if (this.type === 'tray' && (!this.options.icon || !this.options.tooltip))
      throw new Error(
        `Option object must has properties of 'tooltip' and 'icon' !`
      );

    if (this.type !== 'thumbar') this.updateTemplate(window, ...args);
    if (this.type === 'menu')
      return this.buildMenu(
        'setAppMenu' in this.options ? this.options.setAppMenu ?? false : false
      );
    else if (this.type === 'tray') return this.buildTray();
    else if (this.type === 'context') return this.buildContext(window);
    else if (this.type === 'thumbar') return this.buildThumbar(window);
    else throw new Error(`Menu type is invalid.`);
  }

  private updateTemplate(window: BrowserWindow, ...args: unknown[]) {
    Object.keys(this.template).map((key) => {
      // @ts-ignore
      if (typeof this.template[key] === 'function')
        // @ts-ignore
        this.template[key].bind(null, window, ...args);

      return key;
    });
  }
  private createMenu() {
    return Menu.buildFromTemplate(
      this.template as unknown[] as MenuItemConstructorOptions[]
    );
  }

  private buildMenu(setAppMenu: boolean) {
    const menu = this.createMenu();
    return setAppMenu ? Menu.setApplicationMenu(menu) : menu;
  }

  private buildTray() {
    const menu = this.createMenu();
    const tray = new Tray(this.options.icon as string);
    tray.setToolTip(this.options.tooltip as string);
    tray.setTitle(this.options.title ? this.options.title : this.name);
    tray.setContextMenu(menu);
    return tray;
  }

  private buildContext(window: BrowserWindow) {
    const menu = this.createMenu();
    window.webContents.on('context-menu', (_, props) => {
      const { x, y } = props;
      if (information.isDebug)
        // @ts-ignore
        this.template.push({
          label: 'Inspect element',
          click: () => {
            window.webContents.inspectElement(x, y);
          },
        } as unknown);

      menu.popup({ window });
    });
  }

  private buildThumbar(window: BrowserWindow) {
    return window.setThumbarButtons(this.template as ThumbarButton[]);
  }
}
