import { takeEvery } from 'redux-saga/effects'
import { POST_TAX_CARD, API_DEV_SERVER } from '../constants'
import {apiPost} from '../utils/request'

import store from '../store'

/**
 * @author Skylar Kong
 *
 */

export function* postTaxCardSaga(action) {

  const url =`${API_DEV_SERVER}/taxs`
  const file = action.e.target.files[0]

  // This will return a Google OAuth2 profile
  const email = (store.getState()).oidc.user.profile.email

  let reader = new FileReader()
  reader.onloadend = e => {

    const body = JSON.stringify({
      email: email,
      filename: file.name,
      filetype: file.type,
      updated_at: new Date(),
      data: e.target.result
    })

    apiPost(url, body)
  }
  reader.readAsDataURL(file)
}

export function* watchTaxSaga() {
  yield takeEvery(POST_TAX_CARD, postTaxCardSaga)
}
