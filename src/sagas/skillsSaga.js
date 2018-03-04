import { put, takeLatest } from 'redux-saga/effects';

import { types as skillsTypes } from '../ducks/skills';

function* skillsFetched() {
  yield put({
    type: skillsTypes.DATA_SUCCESS,
  });
}

const skillsSaga = [
  takeLatest(skillsTypes.DATA_SUCCESS, skillsFetched),
];

export default skillsSaga;
