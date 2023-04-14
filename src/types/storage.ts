import { Engines } from './api';

export interface IStoreData extends Record<string, unknown> {
  windows: {
    x: number;
    y: number;
    height: number;
    width: number;
    isMaximized: boolean;
  };
}

export interface ITrackData {
  id: string;
  title: string;
  author: string;
  image: string;
}

export interface IStoreMusic extends Record<string, unknown> {
  youtube: ITrackData[];
  spotify: ITrackData[];
  soundcloud: ITrackData[];
}
