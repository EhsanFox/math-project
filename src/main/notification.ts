/* eslint class-methods-use-this: off */
import { Notification, NotificationConstructorOptions } from 'electron';
import { NotificationHandlerOpts } from 'types';
import Logger from './logger';

export default class NotificationCenter {
  constructor(private readonly logger: Logger) {}
  create(
    opts: NotificationConstructorOptions,
    handler: NotificationHandlerOpts = {}
  ) {
    const result = new Notification(opts);

    if (handler.onClick)
      result.on('click', (...args: unknown[]) => handler.onClick!(...args));
    if (handler.onClose)
      result.on('close', (...args: unknown[]) => handler.onClose!(...args));
    if (handler.onAction)
      result.on('action', (...args: unknown[]) => handler.onAction!(...args));
    if (handler.onShow)
      result.on('show', (...args: unknown[]) => handler.onShow!(...args));
    if (handler.onFail)
      result.on('failed', (event, err) => handler.onFail!(event, err));
    if (handler.onReply)
      result.on('reply', (event, reply) => handler.onReply!(event, reply));

    if (handler.show) result.show();

    return result;
  }
}
