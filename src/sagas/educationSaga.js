import { put, takeLatest, call } from 'redux-saga/effects';
import rsf from './rsf';

import { types as educationTypes } from '../ducks/education';

function* educationWillFetch() {
  try {
    const education = yield call(rsf.database.read, 'education');
    yield put({ type: educationTypes.EDUCATION_SUCCESS, education: yield education });
  } catch (e) {
    // console.log(e);
  }
}

const educationSaga = [
  takeLatest(educationTypes.EDUCATION_REQUEST, educationWillFetch),
];

export default educationSaga;
