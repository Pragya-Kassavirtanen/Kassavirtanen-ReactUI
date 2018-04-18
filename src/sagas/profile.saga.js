import { takeEvery, put, call } from 'redux-saga/effects'
import store from '../store'

import {
  LOAD_PROFILE_START,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILED,
  API_DEV_SERVER
} from '../constants'

import { apiPost, apiRequest } from '../utils/request'
import { loadProfileSuccess, loadProfileFailed } from '../actions'

function* loadProfileSaga() {

  try {

    const url = `${API_DEV_SERVER}/user-profile`
    const body = JSON.stringify({ email: (store.getState()).oidc.user.profile.email })
    const result = yield call(apiPost, url, body)
    const profiles = []

    console.log(result.data)
    /*for (const profile of result.data) {
      profiles.push(profile)
    }*/

    yield put(loadProfileSuccess(result.data))
  } catch (e) {
    yield put(loadProfileFailed(e))
  }

}

export function* watchLoadProfileSaga() {
  yield takeEvery(LOAD_PROFILE_START, loadProfileSaga)
}
