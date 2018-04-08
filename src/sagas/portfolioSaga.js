import { put, takeLatest, call } from 'redux-saga/effects';

import { types as portfolioTypes } from '../ducks/portfolio';

import resumeApi from '../services/api';

function* portfolioWillFetch() {
  try {
    const portfolio = yield call(resumeApi.fetchData, 'portfolio');
    yield put({ type: portfolioTypes.PORTFOLIO_SUCCESS, portfolio: yield portfolio.json() });
  } catch (e) {
    // console.log(e);
  }
}

const portfolioSaga = [
  takeLatest(portfolioTypes.PORTFOLIO_REQUEST, portfolioWillFetch),
];

export default portfolioSaga;
