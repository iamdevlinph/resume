import { put, takeLatest, call } from 'redux-saga/effects';
import rsf from '../rsf';

import { types as technologyTypes } from './technology';

function* technologyWillFetch() {
  try {
    const technology = yield call(rsf.database.read, 'skills');
    yield put({ type: technologyTypes.TECHNOLOGY_SUCCESS, technology });
  } catch (e) {
    // console.log(e);
  }
}

const technologySaga = [
  takeLatest(technologyTypes.TECHNOLOGY_REQUEST, technologyWillFetch),
];

export default technologySaga;
