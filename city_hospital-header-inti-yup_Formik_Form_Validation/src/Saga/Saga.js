import { all, call, put, takeEvery } from "redux-saga/effects";
import { setAlert } from "../Redux/Action/alert.action";
import {
  loggedoutAction,
  logoutAction,
  singout,
} from "../Redux/Action/auth.action";
import * as Actiontype from "../Redux/Actiontype";
import { logoutAPI, singin, singUp } from "./Sagaapi";

function* singupSaga(action) {
  try {
    const user = yield call(singUp, action.payload);
    // yield put(singout(user));
    yield put(setAlert({ text: user.payload, color: "success" }));
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "success" }));
    console.log(e);
  }
}

function* singinSaga(action) {
  try {
    const user = yield call(singin, action.payload);
    yield put(singout(user));
    yield put(setAlert({ text: user.payload, color: "success" }));
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
    console.log(e);
  }
}

function* logout(action) {
  try {
    const user = yield call(logoutAPI, action.payload);
    yield put(loggedoutAction());
    yield put(setAlert({ text: user.payload, color: "success" }));
  } catch (e) {
    console.log(e);
  }
}

function* watchsingup() {
  yield takeEvery(Actiontype.SING_UP, singupSaga);
}

function* watchsingin() {
  yield takeEvery(Actiontype.SING_IN, singinSaga);
}

function* watchlogout() {
  yield takeEvery(Actiontype.LOG_OUT, logout);
}

export function* watchAuth() {
  yield all([watchsingup(), watchsingin(), watchlogout()]);
}
