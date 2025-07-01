import { builder } from '@multistream-tools/builder';

export default builder({
  open({ theme }) {
    return theme('themes/skeleton/dock.css', 'overlays/complex/dock.html');
  }
});
