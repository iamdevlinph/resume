import { combineReducers } from 'redux';

import about from './about/about';
import education from './education/education';
import experience from './experience/experience';
import portfolio from './portfolio/portfolio';
import technology from './technology/technology';

export default combineReducers({
  about,
  education,
  experience,
  portfolio,
  technology,
});
