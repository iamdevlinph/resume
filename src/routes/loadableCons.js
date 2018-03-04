import Loadable from 'react-loadable';

import { Loading } from '../components';

const fakeDelay = ms => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export default {
  Resume: Loadable({
    loader: () => fakeDelay(2000).then(() => import('../containers/Resume/Resume')),
    loading: Loading,
  }),
};
