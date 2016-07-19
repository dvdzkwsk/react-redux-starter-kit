import { fork } from 'redux-saga/effects'

export const makeRootSaga = (sagas) => {
  return function *rootSaga () {
    yield sagas.map(saga => fork(saga))
  }
}

export const injectSagas = (store, { key, sagas }) => {
  if (store.asyncSagas[key]) {
    return
  }
  store.asyncSagas[key] = sagas
  store.runSaga(makeRootSaga(sagas))
}

export default makeRootSaga
