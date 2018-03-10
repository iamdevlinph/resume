import { put, takeLatest, call } from 'redux-saga/effects';

import { types as educationTypes } from '../ducks/education';

import resumeApi from '../services/api';

function* educationWillFetch() {
  try {
    const about = yield call(resumeApi.fetchData, 'education');
    yield put({ type: educationTypes.EDUCATION_SUCCESS, education: yield about.json() });
  } catch (e) {
    // console.log(e);
  }
}

const educationSaga = [
  takeLatest(educationTypes.EDUCATION_REQUEST, educationWillFetch),
];

export default educationSaga;
