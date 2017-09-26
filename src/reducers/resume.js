import { RECEIVE_SKILLS } from '../actions';
import initialState from './initialState'

export default (state = initialState.resumeState, { type, text }) => {
  console.log(state)
  switch (type) {
    case RECEIVE_SKILLS:
      return 'Hello skills';
    default:
      return state;
  }
};
