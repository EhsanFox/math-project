import { information } from '../constants';
import AppMenu from './menu.base';

export default new AppMenu('about', 'menu', 'any', [
  {
    label: information.name,
    enabled: false,
  },
]);
