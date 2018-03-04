export const types = {
  DATA_REQUEST: 'EXPERIENCE/DATA_REQUEST',
  DATA_SUCCESS: 'EXPERIENCE/DATA_SUCCESS',
  DATA_FAIL: 'EXPERIENCE/DATA_FAIL',
};

export const initialState = {
  experience: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
};
