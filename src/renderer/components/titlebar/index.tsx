import './titlebar.scss';
import * as icons from '../../../../assets/icons';
import { useState } from 'react';

export default function Titlebar() {

  return (
    <header className="pageHeader">
      <p>ریاضی</p>

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
