import { RECEIVE_SKILLS, UPDATE_SKILLS_AJAX_STATUS } from '../actions';
import initialState from './initialState'

export default (state = initialState.skillsState, action) => {
  switch (action.type) {
    case UPDATE_SKILLS_AJAX_STATUS:
      return Object.assign({}, state, {
        isFetching: action.payload
      })
    case RECEIVE_SKILLS:
      return Object.assign({}, state, {
        data: action.skills
      })
    default:
      return state;
  }
};
