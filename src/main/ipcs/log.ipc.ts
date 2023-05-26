import IPCEvent from './base.ipc';
import { app } from 'electron';
import { IPCEvents, information } from '../constants';
import path from 'path';
import Logger from '../logger';

export default new IPCEvent(
  IPCEvents.log,
  'sync',
  (
    window,
    event,
    level: 'info' | 'debug' | 'warn' | 'error',
    ...data: unknown[]
  ) => {
    const log = new Logger(
      'ipc',
      path.join(app.getPath('appData'), app.getName()),
      information.isDebug
    );

    switch (level) {
      case 'info':
        log.log(...data);
        break;

      case 'debug':
        log.debug(...data);
        break;

      case 'warn':
        log.warn(...data);
        break;

      case 'error':
        log.error(...data);
        break;

      default:
        log.log(...data);
        break;
    }
  }
);
