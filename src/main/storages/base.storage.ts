/* eslint no-param-reassign: off */
import Store, { type Options } from 'electron-store';
import { Schema } from 'electron-store';
import yaml from 'js-yaml';
import { IStoreData } from 'types';

export default class Storage<T extends Record<string, unknown> = IStoreData> {
  readonly filepath: string | undefined;
  private readonly engine: Store<T> | undefined = undefined;

  constructor(
    readonly name: string,
    private readonly schema: T = {
      windows: {
        type: 'object',
        properties: {
          x: {
            type: 'number',
          },
          y: {
            type: 'number',
          },
          height: {
            type: 'number',
          },
          width: {
            type: 'number',
          },
          isMaximized: {
            type: 'boolean',
          },
        },
      },
    } as unknown as T,
    private readonly opts: Options<T> = {
      accessPropertiesByDotNotation: true,
      fileExtension: 'yaml',
      serialize: yaml.dump,
      deserialize: (str: string, opts?: yaml.LoadOptions | undefined) =>
        yaml.load(str, opts) as T,
      clearInvalidConfig: false, // for now!
      encryptionKey: 'ZAnx1yihWEb4',
    }
  ) {
    this.opts.schema = this.schema as Schema<T>;
    // @ts-ignore
    this.opts.name = this.name;
    if (!this.engine) this.engine = new Store(this.opts);

    this.filepath = this.engine?.path;
  }

  get<T extends unknown>(key: string): T {
    return this.engine?.get<string>(key) as T;
  }

  set<T extends unknown>(key: string, value: T): void {
    this.engine?.set(key, value);
  }

  has(key: string): boolean | undefined {
    return this.engine?.has(key);
  }

  delete<T extends unknown>(
    key: string,
    returnObj = false
  ): T | void | undefined {
    if (returnObj) {
      const result = this.get<T>(key);
      this.engine?.delete(key);
      return result;
    }

    return this.engine?.delete(key);
  }

  resetKeys(...keys: string[]) {
    return this.engine?.reset<string>(...keys);
  }

  reset() {
    return this.engine?.clear();
  }

  size() {
    return this.engine?.size;
  }

  all(): T | undefined {
    return this.engine?.store;
  }

  openFile() {
    return this.engine?.openInEditor();
  }
}
