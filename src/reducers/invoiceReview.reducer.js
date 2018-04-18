import React from 'react'
import { LOAD_INVOICE_REVIEW } from '../constants'
import store from '../store'
import ReviewInvoiceRow from '../components/invoice/reviewInvoiceRow.component'

const reviewInvoice = (state = {}, action) => {
  switch (action.type) {

    case LOAD_INVOICE_REVIEW:

      const invoiceInputRows = (store.getState()).invoice.invoiceInputRows
      const reviewRows = invoiceInputRows.map((el) => <ReviewInvoiceRow key={el.key} {...el.props} />)

      return Object.assign( {}, state, {
        reviewRows: reviewRows
      } )

    default:
      return state
  }
}

export default reviewInvoice
