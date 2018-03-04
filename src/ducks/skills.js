export const types = {
  DATA_REQUEST: 'SKILLS/DATA_REQUEST',
  DATA_SUCCESS: 'SKILLS/DATA_SUCCESS',
  DATA_FAIL: 'SKILLS/DATA_FAIL',
  DUMMY: 'SKILLS/DUMMY',
};

export const initialState = {
  skills: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const actions = {
};
