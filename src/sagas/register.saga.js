import { takeEvery, put, call } from 'redux-saga/effects'

import { registerSuccess, registerFailed } from '../actions'
import { SIGNUP_FORM_SUBMIT, KVT_IDENTITY_SERVER } from '../constants'
import {identityServerPost} from '../utils/request'

import store from '../store'


/**
 * @author Pragya Gupta
 *
 */

function* registerUserSaga() {

  try {

  const url =`${KVT_IDENTITY_SERVER}/RegisterUser`
  
  const email = (store.getState()).form.register.values.email
 
  const password = (store.getState()).form.register.values.password  

  const body = JSON.stringify({
      email: email,
      password: password,     
      SubjectId: email
  })

  const result = yield call(identityServerPost, url, body)
  yield put(registerSuccess(result))

} catch (e) {
  yield put(registerFailed(e))

 }

}

export function* watchRegisterUserSaga() {
  yield takeEvery(SIGNUP_FORM_SUBMIT, registerUserSaga)
}