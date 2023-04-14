export default {
  name: 'math-app',
  version: '1.0.0',
  description: '🎙 a math-app for kids',
  url: 'https://ehsan.js.org/',
  backendUrl: 'https://localhost:3000/',
  isDebug:
    process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true',
};
