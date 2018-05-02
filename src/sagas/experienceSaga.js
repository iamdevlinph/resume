import { put, takeLatest, call } from 'redux-saga/effects';
import rsf from './rsf';

import { types as experienceTypes } from '../ducks/experience';

function* experienceWillFetch() {
  try {
    const experience = yield call(rsf.database.read, 'experience');
    yield put({ type: experienceTypes.EXPERIENCE_SUCCESS, experience: yield experience });
  } catch (e) {
    // console.log(e);
  }
}

const experienceSaga = [
  takeLatest(experienceTypes.EXPERIENCE_REQUEST, experienceWillFetch),
];

export default experienceSaga;
