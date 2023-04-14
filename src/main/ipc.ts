import { app, BrowserWindow, IpcMain } from 'electron';
import path from 'path';
import { information } from './constants';
import * as EventList from './ipcs';
import IPCEvent from './ipcs/base.ipc';
import Logger from './logger';

export default class IPCHandler {
  constructor(
    private readonly window: BrowserWindow,
    private readonly ipc: IpcMain,
    private readonly eventList: Record<string, IPCEvent> = EventList
  ) {
    Object.keys(this.eventList).map((key) => {
      const event = this.eventList[key];

      if (!(event instanceof IPCEvent))
        throw new Error(`One of IPCs are not made by IPCEvent.`);

      switch (event.type) {
        case 'sync':
          this.ipc.on(
            event.name,
            event.handler.bind(null, this.window) // .bind(this.log)
          );
          break;

        case 'syncOnce':
          this.ipc.once(
            event.name,
            event.handler.bind(null, this.window) // .bind(this.log)
          );
          break;

        case 'async':
          this.ipc.handle(
            event.name,
            event.handler.bind(null, this.window) // .bind(this.log)
          );
          break;

        case 'asyncOnce':
          this.ipc.handleOnce(
            event.name,
            event.handler.bind(null, this.window) // .bind(this.log)
          );
          break;
      }

      return key;
    });
  }
}
