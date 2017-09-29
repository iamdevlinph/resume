import { put, takeLatest, call } from 'redux-saga/effects';

import { REQUEST_SKILLS, RECEIVE_SKILLS, UPDATE_SKILLS_AJAX_STATUS } from './actions';

import resumeApi from './api/api';

// worker saga: will be fired on USER_FETCH_REQUESTED actions
function* getSkills(action) {

  try {
    const skills = yield call(resumeApi.fetchSkills);
    yield put({ type: RECEIVE_SKILLS, skills: yield skills.json() });
    yield put({ type: UPDATE_SKILLS_AJAX_STATUS, payload: false })
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
  // yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
  yield takeLatest(REQUEST_SKILLS, getSkills);
}
