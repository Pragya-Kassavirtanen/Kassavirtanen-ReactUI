import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { reducer as oidcReducer } from 'redux-oidc'

import invoiceReducer from './invoice.reducer'
import invoiceReviews from './invoiceReview.reducer'

import profileReducer from './profile.reducer'

import register from './register.reducer'
import login from './login.reducer'
import client from './client.reducer'

/**
 * TODO: describe this
 *
 * @author Skylar Kong
 */


const reducers = combineReducers({

  form: reduxFormReducer,
  oidc: oidcReducer,
  routing: routerReducer,
  invoice: invoiceReducer,
  invoiceReviews: invoiceReviews,
  register,
  login,
  client
})

export default reducers
