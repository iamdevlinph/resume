import { put, takeLatest, call } from 'redux-saga/effects';

import { types as technologyTypes } from '../ducks/technology';

import resumeApi from '../services/api';

function* technologyWillFetch() {
  try {
    const technology = yield call(resumeApi.fetchData, 'skills');
    yield put({ type: technologyTypes.TECHNOLOGY_SUCCESS, technology: yield technology.json() });
  } catch (e) {
    // console.log(e);
  }
}

const technologySaga = [
  takeLatest(technologyTypes.TECHNOLOGY_REQUEST, technologyWillFetch),
];

export default technologySaga;
