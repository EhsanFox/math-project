import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Link } from 'react-router-dom';
import { MouseEventHandler } from 'react';

import falseSound from '../../../../assets/audios/falseAnswer.wav';
import trueSound from '../../../../assets/audios/trueAnswer.wav';

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
  const sound = link === 'none' ? falseSound : trueSound;
  const audio = new Audio(sound);

  if (open) audio.play();

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
