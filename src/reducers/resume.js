import { RECEIVE_SKILLS, UPDATE_SKILLS_AJAX_STATUS } from '../actions';
import initialState from './initialState'

export default (state = initialState.resumeState, action) => {
  switch (action.type) {
    case UPDATE_SKILLS_AJAX_STATUS:
      return [
        ...state,
        {
          isFetching: action.payload
        }
      ]
    case RECEIVE_SKILLS:
      return [
        ...state,
        {
          skills: action.skills
        }
      ];
    default:
      return state;
  }
};
