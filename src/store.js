import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './sagaDucks/_reducers';
import mySaga from './sagaDucks/_sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
export default createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(mySaga);

// render the application

