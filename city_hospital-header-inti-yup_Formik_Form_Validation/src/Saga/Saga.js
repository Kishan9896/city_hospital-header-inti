import { all, call, put, takeEvery } from "redux-saga/effects";
import * as Actiontype from "../Redux/Actiontype";
import { singin, singUp } from "./Sagaapi";

function* singupSaga(action) {
  try {
    const user = yield call(singUp, action.payload);
    console.log(user);
    // yield put({ type: Actiontype.SING_UP, user: action.payload });
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    console.log(e);
  }
}

function* singinSaga(action) {
  try {
    const user = yield call(singin, action.payload);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}

function* watchsingup(values) {
  yield takeEvery(Actiontype.SING_UP, singupSaga);
}

function* watchsingin(values) {
  yield takeEvery(Actiontype.SING_IN, singinSaga);
}

export function* watchAuth() {
  yield all([watchsingup(), watchsingin()]);
}
