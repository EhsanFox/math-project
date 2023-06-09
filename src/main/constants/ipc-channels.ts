export enum IPCEvents {
  windowsChange = 'windows-change',

  appUpdateDownloading = 'download-progress',
  checkingForUpdate = 'checking-for-update',
  appUpdateFinished = 'update-downloaded',
  appUpdateAvailable = 'update-available',
  appUpdateNotAvailable = 'update-not-available',

  updateStorage = 'update-storage',

  openAbout = 'open:aboutDialog',

  api = 'api',
  log = 'log',

  error = 'error',
}
