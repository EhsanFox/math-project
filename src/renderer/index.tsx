import { createRoot } from 'react-dom/client';
import music from '../../assets/audios/music.mp3';
import App from './App';

const appMusic = new Audio(music);
const playMusic = () => {
  appMusic.play();
};
appMusic.onended = () => playMusic();
appMusic.volume = 0.1;
playMusic();

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', (arg) => {
// eslint-disable-next-line no-console
// console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
