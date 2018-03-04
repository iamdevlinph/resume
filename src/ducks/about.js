export const types = {
  DATA_REQUEST: 'ABOUT/DATA_REQUEST',
  DATA_SUCCESS: 'ABOUT/DATA_SUCCESS',
  DATA_FAIL: 'ABOUT/DATA_FAIL',
};

export const initialState = {
  about: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
};
