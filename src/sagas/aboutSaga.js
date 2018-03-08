import { put, takeLatest, call } from 'redux-saga/effects';

import { types as aboutTypes } from '../ducks/about';

import resumeApi from '../services/api';

function* aboutWillFetch() {
  yield put({
    type: aboutTypes.ABOUT_SUCCESS,
  });
  try {
    const about = yield call(resumeApi.fetchData, 'about');
    yield put({ type: aboutTypes.ABOUT_SUCCESS, about: yield about.json() });
  } catch (e) {
    console.log(e);
  }
}

const aboutSaga = [
  takeLatest(aboutTypes.ABOUT_REQUEST, aboutWillFetch),
];

export default aboutSaga;
