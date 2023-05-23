import { MainStorage } from '../storages';
import { IPCEvents } from '../constants';
import IPCEvent from './base.ipc';

export default new IPCEvent(
  IPCEvents.updateStorage,
  'async',
  (window, event, action, key: string, value?: string) => {
    const storage = MainStorage;

    if (action === 'set') {
      if (!value) return false;

      return storage.set(key, value);
    } else if (action === 'get') {
      return storage.get<string>(key);
    } else {
      // todo:
    }
  }
);
