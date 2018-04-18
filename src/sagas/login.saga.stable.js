import { takeEvery, put, call, cancelled } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { LOGIN_FORM_SUBMIT, LOGIN_SUCCESS, LOGIN_FAILED, CLIENT_UNSET, KVT_IDENTITY_SERVER } from '../constants'
import { setClient, unsetClient } from '../actions'
import {identityServerPost} from '../utils/request'
import store from '../store'

/**
 * @author Pragya Gupta
 *
 */

function* loginSaga() {

  let user

  try {

  const url =`${KVT_IDENTITY_SERVER}/CheckUser`
  
  const email = (store.getState()).form.login.values.email
 
  const password = (store.getState()).form.login.values.password  

  const body = JSON.stringify({
      email: email,
      password: password,     
      SubjectId: email
  })

  user = yield call(identityServerPost, url, body)

  yield put(setClient(user))

  yield put({ type: LOGIN_SUCCESS })

  sessionStorage.setItem('user', JSON.stringify(user))

  browserHistory.push('/dashboard/main')

} catch (e) { 

  yield put({ type: LOGIN_FAILED, error })

 } finally {

  if (yield cancelled()) {

    browserHistory.push('/dashboard/login')

  }

  return user
  
}
}

export function* watchLoginSaga() {
  yield takeEvery(LOGIN_FORM_SUBMIT, loginSaga)
}