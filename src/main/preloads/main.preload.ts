// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { information, IPCEvents } from '../constants';

const appHandler = {
  close() {
    ipcRenderer.send(IPCEvents.windowsChange, 'close');
  },

  minimize() {
    ipcRenderer.send(IPCEvents.windowsChange, 'minimize');
  },

  maximize() {
    ipcRenderer.send(IPCEvents.windowsChange, 'maximize');
  },

  unmaximize() {
    ipcRenderer.send(IPCEvents.windowsChange, 'unmaximize');
  },

  log(...args: unknown[]) {
    ipcRenderer.send(IPCEvents.log, 'info', ...args);
    console.log(...args);
  },

  warn(...args: unknown[]) {
    ipcRenderer.send(IPCEvents.log, 'warn', ...args);
    console.warn(...args);
  },

  error(...args: unknown[]) {
    ipcRenderer.send(IPCEvents.log, 'error', ...args);
    console.error(...args);
  },

  debug(...args: unknown[]) {
    ipcRenderer.send(IPCEvents.log, 'debug', ...args);
    console.log(...args);
  },
};

const ipcHandler = {
  sendMessage(channel: IPCEvents | string, ...args: any[]) {
    ipcRenderer.send(channel, ...args);
  },
  on(channel: IPCEvents | string, func: (...args: any[]) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      func(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  once(channel: IPCEvents | string, func: (...args: any[]) => void) {
    ipcRenderer.once(channel, (_event, ...args) => func(...args));
  },
  callFor<T extends unknown>(
    channel: IPCEvents | string,
    ...args: any[]
  ): Promise<T> {
    return ipcRenderer.invoke(channel, ...args);
  },
};

contextBridge.exposeInMainWorld('ipc', ipcHandler);
contextBridge.exposeInMainWorld('info', information);
contextBridge.exposeInMainWorld('app', appHandler);

export type IpcHandler = typeof ipcHandler;
export type AppInfo = typeof information;
export type AppHandler = typeof appHandler;
