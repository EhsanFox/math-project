import './titlebar.scss';
import * as icons from '../../../../assets/icons';
import { useState } from 'react';

export default function Titlebar() {
  const [isMaximize, setMaximize] = useState(false);

  window.ipc.on('maximize', () => setMaximize(true));
  window.ipc.on('unmaximize', () => setMaximize(false));

  return (
    <header className="pageHeader">
      <p>{window.info.name}</p>
      <div className="drag-region" />
      <div className="HeaderBtns">
        <button
          type="button"
          className="closeBtn"
          onClick={() => window.app.close()}
        >
          <img
            alt=""
            src={icons.closeK10}
            srcSet={`
              ${icons.closeK10} 1x, 
              ${icons.closeK12} 1.25x
              ${icons.closeK15} 1.5x
              ${icons.closeK15} 1.75x
              ${icons.closeK20} 2x
              ${icons.closeK20} 2.25x
              ${icons.closeK24} 2.5x
              ${icons.closeK30} 3x
            `}
          />
        </button>

        {isMaximize ? (
          <button
            type="button"
            className="restoreBtn"
            onClick={() => {
              window.app.unmaximize();
              setMaximize(false);
            }}
          >
            <img
              alt=""
              src={icons.closeK10}
              srcSet={`
            ${icons.restoreK10} 1x, 
            ${icons.restoreK12} 1.25x
            ${icons.restoreK15} 1.5x
            ${icons.restoreK15} 1.75x
            ${icons.restoreK20} 2x
            ${icons.restoreK20} 2.25x
            ${icons.restoreK24} 2.5x
            ${icons.restoreK30} 3x
          `}
            />
          </button>
        ) : (
          <button
            type="button"
            className="sizeBtn"
            onClick={() => {
              window.app.maximize();
              setMaximize(true);
            }}
          >
            <img
              alt=""
              src={icons.closeK10}
              srcSet={`
              ${icons.maxK10} 1x, 
              ${icons.maxK12} 1.25x
              ${icons.maxK15} 1.5x
              ${icons.maxK15} 1.75x
              ${icons.maxK20} 2x
              ${icons.maxK20} 2.25x
              ${icons.maxK24} 2.5x
              ${icons.maxK30} 3x
            `}
            />
          </button>
        )}

        <button
          type="button"
          className="minimizBtn"
          onClick={() => window.app.minimize()}
        >
          <img
            alt=""
            src={icons.closeK10}
            srcSet={`
              ${icons.minK10} 1x, 
              ${icons.minK12} 1.25x
              ${icons.minK15} 1.5x
              ${icons.minK15} 1.75x
              ${icons.minK20} 2x
              ${icons.minK20} 2.25x
              ${icons.minK24} 2.5x
              ${icons.minK30} 3x
            `}
          />
        </button>
      </div>
    </header>
  );
}
