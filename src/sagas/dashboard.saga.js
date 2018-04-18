import { takeEvery, put, call } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { checkAuthInfoSuccess, checkAuthInfoFailed } from '../actions'
import { CHECK_AUTH_INFO, API_DEV_SERVER, KVT_IDENTITY_SERVER } from '../constants'
import { identityServerPost } from '../utils/request'
import { setClient, unsetClient } from '../actions'
import store from '../store'

/**
 * @author Skylar Kong
 */

function* checkAuthInfo() {

    try {
  
    const url =`${KVT_IDENTITY_SERVER}/CheckUser`
    
    const email = (store.getState()).form.login.values.email
   
    const password = (store.getState()).form.login.values.password  
  
    const body = JSON.stringify({
        email: email,
        password: password ,     
        SubjectId: email
    })
  
   const user = yield call(identityServerPost, url, body)
  
   yield put(setClient(user))  
   
   yield put(checkAuthInfoSuccess(user))
   
   sessionStorage.setItem('user', JSON.stringify(user))
  
   browserHistory.push('/dashboard/main')
  
  } catch (e) {

    yield put(checkAuthInfoFailed(e))
    
  }
}

export function* watchCheckAuthInfoSaga() {
  yield takeEvery(CHECK_AUTH_INFO, checkAuthInfo)
}
