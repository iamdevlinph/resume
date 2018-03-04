import { all } from 'redux-saga/effects';

import skillsSaga from './skillsSaga';

export default function* mySaga() {
  yield all([
    ...skillsSaga,
  ]);
}
