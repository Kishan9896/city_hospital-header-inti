import { all, call, put, takeEvery } from "redux-saga/effects";

function* singupSaga(action) {
  try {
    //   const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: Actiontype.SING_UP, user: action.payload });
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(Actiontype.SING_UP, singupSaga);
}

function* watchSaga() {
  yield all([singupSaga()]);
}

export default mySaga;
