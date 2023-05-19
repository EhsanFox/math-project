module.exports = {
  productName: 'math-app',
  appId: 'org.js.ehsan.math.app',
  copyright: `Copyright © ${new Date().getUTCFullYear()} Ehsan Golmakani`,
  files: [
    'assets/*',
    'dist/**/*',
    'node_modules/**/*',
    '.erb/**/*',
    'package.json',
  ],
  directories: {
    buildResources: 'assets',
    output: 'build',
  },
  // Platforms

  // Windows
  win: {
    target: 'nsis',
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    perMachine: true,
    installerIcon: 'assets/icon.ico',
    uninstallerIcon: 'assets/icon.ico',
    uninstallDisplayName: 'MathApp',
  },

  // Linux
  linux: {
    target: 'AppImage',
  },

  // Mac-OS
  mac: {
    target: ['dmg', 'zip', 'pkg'],
    category: 'public.app-category.entertainment',
  },
};
