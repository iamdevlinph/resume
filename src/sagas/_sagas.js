import { all } from 'redux-saga/effects';

import aboutSaga from './aboutSaga';
import experienceSaga from './experienceSaga';

export default function* mySaga() {
  yield all([
    ...aboutSaga,
    ...experienceSaga,
  ]);
}
