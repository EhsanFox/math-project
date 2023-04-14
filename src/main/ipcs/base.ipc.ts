import { BrowserWindow, IpcMainEvent, IpcMainInvokeEvent } from 'electron';
import { IPCEvents } from '../constants';

export default class IPCEvent {
  constructor(
    readonly name: IPCEvents | string,
    readonly type: 'sync' | 'syncOnce' | 'async' | 'asyncOnce',
    readonly handler: (
      window: BrowserWindow,
      event: IpcMainEvent | IpcMainInvokeEvent,
      ...args: any[]
    ) => void | unknown | Promise<void | unknown>
  ) {}
}
