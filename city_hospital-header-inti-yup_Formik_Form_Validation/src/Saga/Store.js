function* sagaAll() {
  yield [singupSaga()];
}
