import { Event } from 'electron';

export interface NotificationHandlerOpts {
  show?: boolean;
  onClick?: Function;
  onClose?: Function;
  onShow?: Function;
  onFail?: (event: Event, error: string) => void;
  onReply?: (event: Event, reply: string) => void;
  onAction?: Function;
}
