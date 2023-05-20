import { MainStorage } from 'main/storages';
import { IPCEvents } from '../constants';
import IPCEvent from './base.ipc';

export default new IPCEvent(
  IPCEvents.updateStorage,
  'async',
  (window, event, action, key: string, value?: string) => {
    const storage = MainStorage;
    switch (action) {
      case 'set':
        if(!value) return false;

        return storage.set(key, value)
        break;

      case 'get':
        return storage.get<string>(key);
        break;

      default:
        break;
    }
  }
);
