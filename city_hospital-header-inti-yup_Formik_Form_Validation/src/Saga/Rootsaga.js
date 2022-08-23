import { all } from "redux-saga/effects";
import { watchAuth } from "./Saga";

export function* sagaAll() {
  yield all([watchAuth()]);
}
