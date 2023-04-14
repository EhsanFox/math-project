/* eslint class-methods-use-this: off */
import fs, { WriteStream } from 'fs';
import path from 'path';

export default class Logger {
  readonly filePath: string;

  constructor(
    readonly name: string,
    private readonly logdir: string,
    private readonly isDev: boolean,
    readonly fileExtension: string = 'log',
    private readonly file?: WriteStream
  ) {
    if (!fs.existsSync(logdir))
      this.logdir = fs.mkdirSync(logdir, { recursive: true }) as string;

    this.filePath = path.join(
      this.logdir,
      `${this.name}.${this.fileExtension}`
    );

    const oldContent = !fs.existsSync(this.filePath)
      ? ''
      : fs.readFileSync(this.filePath, { encoding: 'utf-8' });

    this.file = this.file ?? fs.createWriteStream(this.filePath);
    this.fileHeader(oldContent === '' ? undefined : oldContent);
  }

  private fileHeader(ctx?: string) {
    if (ctx) this.writeRaw(`${ctx}\n`);
    this.write('TAG');
  }

  log(...args: unknown[]) {
    this.write('LOG', ...args);
  }

  warn(...args: unknown[]) {
    this.write('WARN', ...args);
  }

  error(...args: unknown[]) {
    this.write('ERR', ...args);
  }

  debug(...args: unknown[]) {
    this.write('DEBUG', ...args);
  }

  private isFileReady() {
    return this.file && this.file.writable;
  }

  private write(
    status: 'LOG' | 'DEBUG' | 'WARN' | 'ERR' | 'TAG',
    ...args: unknown[]
  ) {
    const txt = args.join(' ');
    const text = this.buildText(status, txt);
    if (!this.isFileReady())
      throw new Error(`File is not ready to write data.`);

    this.writeRaw(`${text}\n`);
    if (this.isDev && status !== 'TAG')
      console.log(this.buildText(status, ''), ...args);
  }

  private writeRaw(txt: string) {
    this.file!.write(txt);
  }

  private buildText(
    status: 'LOG' | 'DEBUG' | 'WARN' | 'ERR' | 'TAG',
    txt?: string
  ) {
    return status === 'TAG'
      ? `--- [${this.time(false)}] ---`
      : `[${this.time()} ${status}]: ${txt ?? ''}`;
  }

  private time(toLocale = true) {
    return toLocale
      ? new Date().toLocaleTimeString()
      : new Date().toString().split(' ').splice(1, 4).join(' ');
  }
}
