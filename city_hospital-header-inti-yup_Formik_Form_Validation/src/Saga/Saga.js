import { all, call, put, takeEvery } from "redux-saga/effects";
import { singout } from "../Redux/Action/auth.action";
import * as Actiontype from "../Redux/Actiontype";
import { singin, singUp } from "./Sagaapi";

function* singupSaga(action) {
  try {
    const user = yield call(singUp, action.payload);
    // yield put(singout(user));
    yield put({
      type: Actiontype.SET_ALERT,
      payload: { text: "", color: "success" },
    });
  } catch (e) {
    yield put({
      type: Actiontype.SET_ALERT,
      payload: { text: e, color: "error" },
    });
    console.log(e);
  }
}

function* singinSaga(action) {
  try {
    const user = yield call(singin, action.payload);
    yield put(singout(user));
    yield put({
      type: Actiontype.SET_ALERT,
      payload: { text: "Login successfully", color: "success" },
    });
  } catch (e) {
    yield put({
      type: Actiontype.SET_ALERT,
      payload: { text: e, color: "error" },
    });
    console.log(e);
  }
}

function* watchsingup() {
  yield takeEvery(Actiontype.SING_UP, singupSaga);
}

function* watchsingin() {
  yield takeEvery(Actiontype.SING_IN, singinSaga);
}

export function* watchAuth() {
  yield all([watchsingup(), watchsingin()]);
}
