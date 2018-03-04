import { all } from 'redux-saga/effects';

import counterSagas from './counterSagas';

export default function* mySaga() {
  yield all([
    ...counterSagas,
  ]);
}
