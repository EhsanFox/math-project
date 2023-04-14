/* eslint class-methods-use-this: off */
import { app, Menu, shell, BrowserWindow, Tray } from 'electron';
import { MenuList } from 'types';

import * as menuList from './menus';
import AppMenu from './menus/menu.base';

export default class MenuManager {
  constructor(
    private readonly mainWindow: BrowserWindow,
    private readonly rawMenus: Record<string, AppMenu> = menuList,
    readonly menus: Map<string, ReturnType<AppMenu['build']>> = new Map()
  ) {
    Object.keys(this.rawMenus).map((key, i) => {
      const appMenu = this.rawMenus[key];

      this.menus.set(appMenu.name, appMenu.build(this.mainWindow));

      return key;
    });
  }
}
