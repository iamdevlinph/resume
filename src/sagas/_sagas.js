import { all } from 'redux-saga/effects';

import aboutSaga from './aboutSaga';
import experienceSaga from './experienceSaga';
import technologySaga from './technologySaga';
import educationSaga from './educationSaga';
import portfolioSaga from './portfolioSaga';

export default function* mySaga() {
  yield all([
    ...aboutSaga,
    ...experienceSaga,
    ...technologySaga,
    ...educationSaga,
    ...portfolioSaga,
  ]);
}
