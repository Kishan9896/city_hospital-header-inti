function* sagaAll() {
  yield [singupSaga()];
}