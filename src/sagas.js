import { put, takeLatest } from 'redux-saga/effects';

import { REQUEST_HELLO_WORLD, receiveHelloWorld } from './actions';
import { REQUEST_SKILLS, receiveSkills } from './actions';

// worker saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
  try {
    // api call
    yield put(receiveHelloWorld('Hello world from redux-saga'));
  } catch (e) {
    yield put(receiveHelloWorld('Hello world from redux-saga'));

  }
}

function* getSkills(action) {
  try {
    yield put(receiveSkills)
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
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
  yield takeLatest(REQUEST_SKILLS, getSkills);
}
