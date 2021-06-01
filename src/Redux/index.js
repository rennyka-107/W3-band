import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer";
import rootSaga from "./Saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger()));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;

// render the application
