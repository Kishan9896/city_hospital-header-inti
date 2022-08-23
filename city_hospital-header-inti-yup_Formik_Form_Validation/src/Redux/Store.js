import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import Rootreducer from "./reducer/Rootreducer";

import { sagaAll } from "../Saga/Rootsaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
// mount it on the Store
export const store = createStore(Rootreducer, applyMiddleware(...middleware));

// then run the saga
sagaMiddleware.run(sagaAll);
