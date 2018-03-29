import Loadable from 'react-loadable';

import { Loading } from './components';

const fakeDelay = ms => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const About = Loadable({
  loader: () => fakeDelay(500).then(() => import('./containers/About/About')),
  loading: Loading,
});
const Experience = Loadable({
  loader: () => fakeDelay(500).then(() => import('./containers/Experience/Experience')),
  loading: Loading,
});
const Technology = Loadable({
  loader: () => fakeDelay(500).then(() => import('./containers/Technology/Technology')),
  loading: Loading,
});
const Education = Loadable({
  loader: () => fakeDelay(500).then(() => import('./containers/Education/Education')),
  loading: Loading,
});
const Portfolio = Loadable({
  loader: () => fakeDelay(500).then(() => import('./containers/Portfolio/Portfolio')),
  loading: Loading,
});

export { About, Experience, Technology, Education, Portfolio };
