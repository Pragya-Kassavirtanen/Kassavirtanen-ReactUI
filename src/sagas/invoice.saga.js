import { takeEvery, put, call } from 'redux-saga/effects'
import { getFormValues } from 'redux-form'
import {
  GET_INVOICES_START,
  API_DEV_SERVER,
  SAVE_AND_SEND_INVOICE } from '../constants'
import { getInvoicesSuccess, getInvoicesFailed, saveInvoiceSuccess, saveInvoiceFailed } from '../actions'
import { apiPost } from '../utils/request'
import { formatFiToISO } from '../utils/DateTimeFormat'
import store from '../store'

/**
 * @author Skylar Kong
 */

function* getInvoiceSaga() {

  try {

    const url = `${API_DEV_SERVER}/user-invoices`
    const body = JSON.stringify({ email: (store.getState()).oidc.user.profile.email })
    const result = yield call(apiPost, url, body)
    const invoices = []

    console.log(result)
    result[Symbol.iterator] = function* () {
      const keys = Reflect.ownKeys(this)
      for (const key of keys) {
        yield this[key]
      }
    }

    for (const invoice of result.data) {
      invoices.push(invoice)
    }

    yield put(getInvoicesSuccess(invoices))

  } catch (e) {
    yield put(getInvoicesFailed(e))
  }
}

function* saveAndSendInvoiceSaga() {

  try {
    const url = `${API_DEV_SERVER}/invoices`
    const formValues = getFormValues('invoiceReview')(store.getState())

    formValues.due_date = formatFiToISO((formValues.due_date).split('.'))
    formValues.creation_date = formatFiToISO((formValues.creation_date).split('.'))
    formValues.updated_at = formatFiToISO((formValues.updated_at).split('.'))

    const rows = formValues.rows

    rows[Symbol.iterator] = function* () {
      const keys = Reflect.ownKeys(this)
      for (const key of keys) {
        yield this[key]
      }
    }

    for (const val of rows) {
      if (typeof val.sum_with_vat === 'string' ) {
        const sum_with_vat = val.sum_with_vat.replace(/,/g, '.').replace(/\s/g, '')
        val.sum_with_vat = parseFloat(sum_with_vat).toString()
      }

      if (typeof val.quantity_price === 'string') {
        const quantity_price = val.quantity_price.replace(/,/g, '.')
        val.quantity_price = parseFloat(quantity_price).toString()
      }
    }

    const body = JSON.stringify({
      ...formValues,
      authed_user_email: (store.getState()).oidc.user.profile.email
    })

    const result = yield call(apiPost, url, body)
    yield put(saveInvoiceSuccess(result))

  } catch (e) {
    yield put(saveInvoiceFailed(e))
  }
}

// Spawn a new getInvoiceSaga task on each GET_INVOICES_START
export function* watchGetInvoiceSaga() {
  yield takeEvery(GET_INVOICES_START, getInvoiceSaga)
}

export function* watchSaveAndSendInvoiceSaga() {
  yield takeEvery(SAVE_AND_SEND_INVOICE, saveAndSendInvoiceSaga)
}
