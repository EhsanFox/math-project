import { ProgressInfo, UpdateInfo } from 'electron-updater';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import './loading.scss';

export default function Loading({ cancel }: { cancel: () => void }) {
  const [state, setState] = useState('Starting...');
  const [pgStyle, setPgStyle] = useState('none');
  const [pgBarWidth, setPgBarWidth] = useState('0%');

  window.ipc.on('checking-for-update', () => {
    setState(`Checking for update...`);
  });

  window.ipc.on('update-not-available', () => {
    setState(`Starting...`);
    // cancel();
  });

  window.ipc.on('update-available', (e, info: UpdateInfo) => {
    setPgStyle('block');
    setState(`New version found <b>${info.version}</b>!`);
  });

  window.ipc.on('download-progress', (e, progress: ProgressInfo) => {
    setState(`Downloaded ${progress.transferred}Mb of ${progress.total}Mb`);
    setPgBarWidth(`${progress.percent}%`);
  });

  window.ipc.on('update-downloaded', () => {
    setState('Updated has been downloaded!');
    setPgStyle('none');
  });

  window.ipc.on('error', (e, err) => {
    setState(`Error: <b>${err}</b>!`);
  });

  return (
    <>
      <Helmet>
        <title>{window.info.name}</title>
      </Helmet>
      <main className="loadingMain">
        <h1 className="special" id="hero-title">
          {window.info.name}
        </h1>

        <div>
          Version: <b id="currentVersion">{window.info.version}</b>
        </div>

        <p
          className="dull"
          id="status"
          style={{ marginTop: '1rem', fontSize: '0.9rem' }}
        >
          {state}
        </p>

        <div
          className="progress-container"
          id="progress"
          style={{ display: pgStyle }}
        >
          <span
            className="progress-bar"
            id="progress-bar"
            style={{ width: pgBarWidth }}
          />
        </div>
      </main>
    </>
  );
}
