import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import Rootreducer from "./reducer/Rootreducer";
import storage from "redux-persist/lib/storage";

import { sagaAll } from "../Saga/Rootsaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];
const persistConfig = {
  key: "root",
  whitelist: ["auth"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, Rootreducer);
// mount it on the Store
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export let persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(sagaAll);
