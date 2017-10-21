import { combineReducers } from 'redux';

import skills from './skillsReducer';
import experience from './experienceReducer';

export default combineReducers({
  skills,
  experience,
});
