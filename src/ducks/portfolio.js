export const types = {
  DATA_REQUEST: 'PORTFOLIO/DATA_REQUEST',
  DATA_SUCCESS: 'PORTFOLIO/DATA_SUCCESS',
  DATA_FAIL: 'PORTFOLIO/DATA_FAIL',
};

export const initialState = {
  portfolio: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
};
