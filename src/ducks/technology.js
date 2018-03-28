export const types = {
  TECHNOLOGY_REQUEST: 'TECHNOLOGY/TECHNOLOGY_REQUEST',
  TECHNOLOGY_SUCCESS: 'TECHNOLOGY/TECHNOLOGY_SUCCESS',
  TECHNOLOGY_FAIL: 'TECHNOLOGY/TECHNOLOGY_FAIL',
};

export const initialState = {
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TECHNOLOGY_SUCCESS:
      return Object.assign({}, state, {
        data: action.technology,
      });
    default:
      return state;
  }
};

export const actions = {
  requestTechnology: () => ({ type: types.TECHNOLOGY_REQUEST }),
};
