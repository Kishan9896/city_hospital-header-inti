import { all, call, put, takeEvery } from "redux-saga/effects";
import { setAlert } from "../Redux/Action/alert.action";
import {
  loggedoutAction,
  logoutAction,
  signout,
} from "../Redux/Action/auth.action";
import * as Actiontype from "../Redux/Actiontype";
import { logoutAPI, signin, signinWithgoogle, signUp } from "./Sagaapi";

function* signupSaga(action) {
  try {
    const user = yield call(signUp, action.payload);
    yield put(setAlert({ text: user.payload, color: "success" }));
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
    console.log(e);
  }
}

function* signinSaga(action) {
  try {
    const user = yield call(signin, action.payload);
    yield put(signout(user));
    yield put(setAlert({ type: Actiontype.SET_ALERT, text: "Login Successfull", color: "success" }));
  } catch (e) {
    yield put(setAlert({ text: e.payload, color: "error" }));
    console.log(e);
  }
}

function* googleSignin(action) {
  try {
    const user = yield call(signinWithgoogle, action.payload);
    yield put(signout(user));
    yield put(setAlert({ type: Actiontype.SET_ALERT, text: "Login Successfull", color: "success" }));
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
    yield put(loggedoutAction({type: Actiontype.SET_ALERT, payload: {text : e, color: "error"}}))
  }
}

function* watchsignup() {
  yield takeEvery(Actiontype.SIGN_UP, signupSaga);
}

function* watchsignin() {
  yield takeEvery(Actiontype.SIGN_IN, signinSaga);
}

function* watchsigningoogle() {
  yield takeEvery(Actiontype.SIGN_IN_Google, googleSignin);
}

function* watchlogout() {
  yield takeEvery(Actiontype.LOG_OUT, logout);
}

export function* watchAuth() {
  yield all([watchsignup(), watchsignin(), watchlogout(), watchsigningoogle()]);
}
