import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './ducks/_reducers';
import mySaga from './sagas/_sagas';

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

