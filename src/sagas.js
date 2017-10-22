import { put, takeLatest, call } from 'redux-saga/effects';

import { REQUEST_SKILLS, RECEIVE_SKILLS, UPDATE_SKILLS_AJAX_STATUS } from './actions';
import { REQUEST_EXPERIENCE, RECEIVE_EXPERIENCE, UPDATE_EXPERIENCE_AJAX_STATUS } from './actions';
import { REQUEST_EDUCATION, RECEIVE_EDUCATION, UPDATE_EDUCATION_AJAX_STATUS } from './actions';
import { REQUEST_PORTFOLIO, RECEIVE_PORTFOLIO, UPDATE_PORTFOLIO_AJAX_STATUS } from './actions';
import { REQUEST_ABOUT, RECEIVE_ABOUT, UPDATE_ABOUT_AJAX_STATUS } from './actions';

import resumeApi from './api/api';

// worker saga: will be fired on USER_FETCH_REQUESTED actions
function* getSkills(action) {
  try {
    const skills = yield call(resumeApi.fetchData, 'skills');
    yield put({ type: RECEIVE_SKILLS, skills: yield skills.json() });
    yield put({ type: UPDATE_SKILLS_AJAX_STATUS, payload: false })
  } catch (e) {
  }
}

function* getExperience(action) {
  try {
    const experience = yield call(resumeApi.fetchData, 'experience');
    yield put({ type: RECEIVE_EXPERIENCE, experience: yield experience.json() });
    yield put({ type: UPDATE_EXPERIENCE_AJAX_STATUS, payload: false })
  } catch (e) {
  }
}

function* getEducation(action) {
  try {
    const education = yield call(resumeApi.fetchData, 'education');
    yield put({ type: RECEIVE_EDUCATION, education: yield education.json() });
    yield put({ type: UPDATE_EDUCATION_AJAX_STATUS, payload: false })
  } catch (e) {
  }
}

function* getPortfolio(action) {
  try {
    const portfolio = yield call(resumeApi.fetchData, 'portfolio');
    yield put({ type: RECEIVE_PORTFOLIO, portfolio: yield portfolio.json() });
    yield put({ type: UPDATE_PORTFOLIO_AJAX_STATUS, payload: false })
  } catch (e) {
  }
}

function* getAbout(action) {
  try {
    const about = yield call(resumeApi.fetchData, 'about');
    yield put({ type: RECEIVE_ABOUT, about: yield about.json() });
    yield put({ type: UPDATE_ABOUT_AJAX_STATUS, payload: false })
  } catch (e) {
  }
}

/*
  alternatively you may use takelatest

  does not allow concurrent fetches of user if user_fetch_requested gets
  disptached while a fetch is already pending, that pending fetch is cancelled
  and only the latest one willbe runs
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_SKILLS, getSkills);
  yield takeLatest(REQUEST_EXPERIENCE, getExperience);
  yield takeLatest(REQUEST_EDUCATION, getEducation);
  yield takeLatest(REQUEST_PORTFOLIO, getPortfolio);
  yield takeLatest(REQUEST_ABOUT, getAbout);
}
