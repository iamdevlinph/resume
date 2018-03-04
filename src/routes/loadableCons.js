import Loadable from 'react-loadable';

import { Loading } from '../components';

const fakeDelay = ms => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export default {
  Counter: Loadable({
    loader: () => fakeDelay(2000).then(() => import('../containers/Counter/Counter')),
    loading: Loading,
  }),

  About: Loadable({
    loader: () => fakeDelay(2000).then(() => import('../containers/About/About')),
    loading: Loading,
  }),
};
