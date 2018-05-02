import { put, takeLatest, call } from 'redux-saga/effects';
import rsf from './rsf';

import { types as portfolioTypes } from '../ducks/portfolio';

function* portfolioWillFetch() {
  try {
    const portfolio = yield call(rsf.database.read, 'portfolio');
    yield put({ type: portfolioTypes.PORTFOLIO_SUCCESS, portfolio: yield portfolio });
  } catch (e) {
    // console.log(e);
  }
}

const portfolioSaga = [
  takeLatest(portfolioTypes.PORTFOLIO_REQUEST, portfolioWillFetch),
];

export default portfolioSaga;
