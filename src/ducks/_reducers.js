import { combineReducers } from 'redux';

import about from './about';
import education from './education';
import experience from './experience';
import portfolio from './portfolio';
import technology from './technology';

export default combineReducers({
  about,
  education,
  experience,
  portfolio,
  technology,
});
