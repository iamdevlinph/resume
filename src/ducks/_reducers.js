import { combineReducers } from 'redux';

import about from './about';
import education from './education';
import experience from './experience';
import portfolio from './portfolio';
import skills from './skills';

export default combineReducers({
  about,
  education,
  experience,
  portfolio,
  skills,
});
