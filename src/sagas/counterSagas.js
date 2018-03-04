import { put, takeLatest } from 'redux-saga/effects';

import { types as counterTypes } from '../ducks/counter';

function* willIncrease(action) {
  const val = (action && action.val) ? action.val : null;
  yield put({
    type: counterTypes.INCREASE_SUCCESS,
    val,
  });
}

function* willDecrease(action) {
  const val = (action && action.val) ? action.val : null;
  yield put({
    type: counterTypes.DECREASE_SUCCESS,
    val,
  });
}

const counterSagas = [
  takeLatest(counterTypes.INCREASE_REQUEST, willIncrease),
  takeLatest(counterTypes.DECREASE_REQUEST, willDecrease),
];

export default counterSagas;
