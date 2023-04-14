import {
  MenuItem as ElectronMenuItem,
  BrowserWindow,
  Menu,
  MenuItemConstructorOptions,
} from 'electron';
import { Except } from './typefest';

export interface iMenuClickEvent {
  shiftKey: boolean;
  ctrlKey: boolean;
  altKey: boolean;
  metaKey: boolean;
  triggeredByAccelerator: boolean;
}

export interface DarwinMenuItemConstructorOptions
  extends MenuItemConstructorOptions {
  selector?: string;
  submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}

export type MenuItem =
  | MenuItemConstructorOptions
  | DarwinMenuItemConstructorOptions;

export type MenuTemplate = Except<MenuItem, 'click'> & {
  click?: Function;
};

export interface MenuList extends Record<string, MenuTemplate> {}

export interface iMenuOptions {
  icon?: string;
  tooltip?: string;
  title?: string;
  setAppMenu?: boolean;
}
