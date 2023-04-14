import { AppHandler, AppInfo, IpcHandler } from 'main/preloads';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ipc: IpcHandler;
    info: AppInfo;
    app: AppHandler;
  }
}

export {};
