import { RECEIVE_EDUCATION, UPDATE_EDUCATION_AJAX_STATUS } from '../actions';
import initialState from './initialState'

export default (state = initialState.educationState, action) => {
  switch (action.type) {
    case UPDATE_EDUCATION_AJAX_STATUS:
      return Object.assign({}, state, {
        isFetching: action.payload
      })
    case RECEIVE_EDUCATION:
      return Object.assign({}, state, {
        data: action.education
      })
    default:
      return state;
  }
};
