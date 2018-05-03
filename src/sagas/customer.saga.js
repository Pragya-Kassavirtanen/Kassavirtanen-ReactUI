import { takeEvery, put, call } from 'redux-saga/effects'
import { ADD_CUSTOMER_ROW, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILED, KVT_API_SERVER } from '../constants'
import {apiServerPost} from '../utils/request'
import store from '../store'

/**
 * @author Pragya Gupta
 *
 */

function* customerSaga() {

  try {

  const url =`${KVT_API_SERVER}/CreateCustomer`
  
  const country = (store.getState()).form.customer.values.country
  console.log("country: ",country)
 
  const delivery_method = (store.getState()).form.customer.values.delivery_method  

  const company_name  = (store.getState()).form.customer.values.company_name

  const business_id = (store.getState()).form.customer.values.business_id

  const person_to_contact = (store.getState()).form.customer.values.person_to_contact

  const person_to_contact_email = (store.getState()).form.customer.values.person_to_contact_email

  const delivery_address = (store.getState()).form.customer.values.delivery_address

  const city = (store.getState()).form.customer.values.city

  const web_invoice = (store.getState()).form.customer.values.web_invoice

  const body = JSON.stringify({      
      country: country,
      delivery_method: delivery_method,
      company_name: company_name,
      business_id: business_id,
      person_to_contact: person_to_contact,
      person_to_contact_email: person_to_contact_email,
      delivery_address: delivery_address,
      city: city,
      web_invoice: web_invoice      
  })

  yield call(apiServerPost, url, body)  

  yield put({ type: ADD_CUSTOMER_SUCCESS })  

} catch (e) { 

  yield put({ type: ADD_CUSTOMER_FAILED, e })

 } 
  
}

export function* watchCustomerSaga() {

  yield takeEvery(ADD_CUSTOMER_ROW, customerSaga)

}