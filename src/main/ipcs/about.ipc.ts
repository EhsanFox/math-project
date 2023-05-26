import IPCEvent from './base.ipc';
import { app, dialog } from 'electron';
import { IPCEvents, information } from '../constants';
import path from 'path';
import Logger from '../logger';

export default new IPCEvent(IPCEvents.openAbout, 'sync', (window, event) => {
  const log = new Logger(
    'ipc',
    path.join(app.getPath('appData'), app.getName()),
    information.isDebug
  );

  dialog.showMessageBox({
    type: 'info',
    message: 'درباره نرم افزار',
    title: 'دباره نرم افزار',
    detail:
      'نرم افزار تدریسی و کمکی ریاضی دوم دبستان\n\n\nبرنامه نویس نرم افزار: احسان گلمکانی\nگوینده و مدرس: فرناز گلمکانی\n\nساخته شده برای دانشگاه های شهید رجائی قوچان و فرهنگیان اصفهان',
  });
});
