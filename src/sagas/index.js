import { watchGetInvoiceSaga, watchSaveAndSendInvoiceSaga } from './invoice.saga'
import { watchTaxSaga } from './tax.saga'
import { watchCheckAuthInfoSaga } from './dashboard.saga'
import { watchLoadProfileSaga } from './profile.saga'
import { watchRegisterUserSaga } from './register.saga'
import  watchLoginSaga  from './login.saga'
import { watchCustomerSaga }   from './customer.saga'


// Single entry point to start all sagas at once
export default function* rootSaga() {
  yield  [
    watchGetInvoiceSaga(),
    watchSaveAndSendInvoiceSaga(),
    watchTaxSaga(),
    watchCheckAuthInfoSaga(),
    watchLoadProfileSaga(),
    watchRegisterUserSaga(),
    watchLoginSaga(),
    watchCustomerSaga()
  ]
}
