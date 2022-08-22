import { all, call, put, takeEvery } from "redux-saga/effects";
import * as Actiontype from "../Redux/Actiontype";
import { sagaStore } from "./Sagaapi";

function* singupSaga(action) {
  try {
    const user = yield call(sagaStore, action.payload);
    // yield put({ type: Actiontype.SING_UP, user: action.payload });
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export function* mySaga(values) {
  yield takeEvery(Actiontype.SING_UP, sagaStore);
}

function* watchSaga() {
  yield all([singupSaga()]);
}

export default mySaga;
