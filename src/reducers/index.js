import { combineReducers } from 'redux';

import skills from './skillsReducer';
import experience from './experienceReducer';
import education from './educationReducer';

export default combineReducers({
  skills,
  experience,
  education
});
