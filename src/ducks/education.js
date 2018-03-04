export const types = {
  DATA_REQUEST: 'EDUCATION/DATA_REQUEST',
  DATA_SUCCESS: 'EDUCATION/DATA_SUCCESS',
  DATA_FAIL: 'EDUCATION/DATA_FAIL',
};

export const initialState = {
  education: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
};
