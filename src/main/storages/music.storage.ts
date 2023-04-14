import { IStoreMusic } from 'types';
import Storage from './base.storage';

export default new Storage<IStoreMusic>('music', {
  youtube: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        author: {
          type: 'string',
        },
        image: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
      },
    },
  },
  spotify: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        author: {
          type: 'string',
        },
        image: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
      },
    },
  },
  soundcloud: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        author: {
          type: 'string',
        },
        image: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
      },
    },
  },
} as unknown as IStoreMusic);
