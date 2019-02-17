import { compile } from 'path-to-regexp';
import { urls } from './utils/constants';

export default {
  mixLogin: urls.mixLogin,
  home: '/',
  welcome: '/inicio',
  demo: '/demo',
  demoPagination: '/demo/:page([0-9]{1,})',
  demopaginationId: '/demo/:id',
  compile: (path, keys) => compile(path)(keys)
};
