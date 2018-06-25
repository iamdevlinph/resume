import { all } from 'redux-saga/effects';

import aboutSaga from './about/aboutSaga';
import experienceSaga from './experience/experienceSaga';
import technologySaga from './technology/technologySaga';
import educationSaga from './education/educationSaga';
import portfolioSaga from './portfolio/portfolioSaga';

export default function* mySaga() {
  yield all([
    ...aboutSaga,
    ...experienceSaga,
    ...technologySaga,
    ...educationSaga,
    ...portfolioSaga,
  ]);
}
