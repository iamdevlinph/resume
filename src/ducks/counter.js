/**
 * General COMMON State
 */

export const types = {
  INCREASE_REQUEST: 'COUNTER/INCREASE_REQUEST',
  INCREASE_SUCCESS: 'COUNTER/INCREASE_SUCCESS',
  DECREASE_REQUEST: 'COUNTER/DECREASE_REQUEST',
  DECREASE_SUCCESS: 'COUTER/DECREASE_SUCCESS',
  RESET_TOTAL: 'COUNTER/RESET_TOTAL',
};

export const initialState = {
  total: 0,
};

export default (state = initialState, action) => {
  const value = (action && action.val) ? action.val : 1;
  switch (action.type) {
    case types.INCREASE_SUCCESS:
      return { ...state, total: state.total + value };
    case types.DECREASE_SUCCESS:
      return { ...state, total: state.total - value };
    case types.RESET_TOTAL:
      return { ...state, total: 0 };
    default:
      return state;
  }
};

export const actions = {
  counterIncrease: val => ({ type: types.INCREASE_REQUEST, val }),
  counterDecrease: val => ({ type: types.DECREASE_REQUEST, val }),
  counterReset: () => ({ type: types.RESET_TOTAL }),
};
