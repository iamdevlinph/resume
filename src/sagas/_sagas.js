import { all } from 'redux-saga/effects';

import aboutSaga from './aboutSaga';

export default function* mySaga() {
  yield all([
    ...aboutSaga,
  ]);
}
