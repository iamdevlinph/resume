import { RECEIVE_ABOUT, UPDATE_ABOUT_AJAX_STATUS } from '../actions';
import initialState from './initialState'

export default (state = initialState.aboutState, action) => {
  switch (action.type) {
    case UPDATE_ABOUT_AJAX_STATUS:
      return Object.assign({}, state, {
        isFetching: action.payload
      })
    case RECEIVE_ABOUT:
      return Object.assign({}, state, {
        data: action.about
      })
    default:
      return state;
  }
};
