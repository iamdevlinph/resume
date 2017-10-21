import { RECEIVE_EXPERIENCE, UPDATE_EXPERIENCE_AJAX_STATUS } from '../actions';
import initialState from './initialState'

export default (state = initialState.experienceState, action) => {
  switch (action.type) {
    case UPDATE_EXPERIENCE_AJAX_STATUS:
      return Object.assign({}, state, {
        isFetching: action.payload
      })
    case RECEIVE_EXPERIENCE:
      return Object.assign({}, state, {
        data: action.experience
      })
    default:
      return state;
  }
};
