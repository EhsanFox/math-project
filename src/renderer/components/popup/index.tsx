import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';

export default function Popup({
  open,
  title,
  body,
  link,
  close,
}: {
  open: boolean;
  title: string;
  body: string;
  link: string;
  close?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}) {
  return (
    <Dialog
      className="my-dialog"
      open={open}
      // eslint-disable-next-line
      onClose={close ? close : () => {}}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>

      <DialogContent className="dialogContent">
        <p>{body}</p>
      </DialogContent>

      <DialogActions>
        {link === 'none' ? (
          <div className="dBtn" onClick={close as unknown as MouseEventHandler}>
            باشه
          </div>
        ) : (
          <Link className="dBtn" to={link}>
            باشه
          </Link>
        )}
      </DialogActions>
    </Dialog>
  );
}
