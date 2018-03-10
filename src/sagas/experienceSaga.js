import { put, takeLatest, call } from 'redux-saga/effects';

import { types as experienceTypes } from '../ducks/experience';

import resumeApi from '../services/api';

function* experienceWillFetch() {
  try {
    const experience = yield call(resumeApi.fetchData, 'experience');
    yield put({ type: experienceTypes.EXPERIENCE_SUCCESS, experience: yield experience.json() });
  } catch (e) {
    // console.log(e);
  }
}

const experienceSaga = [
  takeLatest(experienceTypes.EXPERIENCE_REQUEST, experienceWillFetch),
];

export default experienceSaga;
