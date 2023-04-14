import { IPCEvents } from '../constants';
import IPCEvent from './base.ipc';

export default new IPCEvent(
  IPCEvents.windowsChange,
  'sync',
  (window, event, action) => {
    switch (action) {
      case 'close':
        window.close();
        break;

      case 'minimize':
        window.minimize();
        break;

      case 'maximize':
        window.maximize();
        break;

      case 'unmaximize':
        window.unmaximize();
        break;

      default:
        break;
    }
  }
);
