import { BrowserWindowConstructorOptions } from 'electron';

export default (
  iconPath: string,
  preloadPath: string,
  enableDevTools: boolean
): BrowserWindowConstructorOptions => {
  return {
    show: false,
    width: 800,
    height: 566,
    icon: iconPath,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      preload: preloadPath,
      devTools: enableDevTools,
    },
  };
};
