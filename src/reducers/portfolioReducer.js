import { RECEIVE_PORTFOLIO, UPDATE_PORTFOLIO_AJAX_STATUS } from '../actions';
import initialState from './initialState'

export default (state = initialState.portfolioState, action) => {
  switch (action.type) {
    case UPDATE_PORTFOLIO_AJAX_STATUS:
      return Object.assign({}, state, {
        isFetching: action.payload
      })
    case RECEIVE_PORTFOLIO:
      return Object.assign({}, state, {
        data: action.portfolio
      })
    default:
      return state;
  }
};
