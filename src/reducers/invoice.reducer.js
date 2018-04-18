import React from 'react'
import {
  CALCULATE_INVOICE_SUM,
  ADD_INVOICE_ROW,
  REMOVE_INVOICE_ROW,
  GET_INVOICES_SUCCESS,
  MIN_DATE_CHANGE,
  MAX_DATE_CHANGE,
  QUANTITY_CHANGE,
  QUANTITY_PRICE_CHANGE,
  ON_INVOICE_REVIEW } from '../constants'
import { SESSION_TERMINATED, USER_EXPIRED } from 'redux-oidc'
import { getFormValues } from 'redux-form'

import store from '../store'
import DateTimeFormat from '../utils/DateTimeFormat'
import InvoiceInputRow from '../components/invoice/invoiceInputRow.component'
import InvoiceRow from '../components/invoice/invoiceRow.component'
const initialState  = {
  invoiceInputRows: [
    <InvoiceInputRow  key={0}
                      description={`rows[${0}][description]`}
                      startDate={`rows[${0}][start_date]`}
                      endDate={`rows[${0}][end_date]`}
                      quantity={`rows[${0}][quantity]`}
                      unit={`rows[${0}][unit]`}
                      quantityPrice={`rows[${0}][quantity_price]`}
                      vatPercent={`rows[${0}][vat_percent]`}
                      vatPercentDescription={`rows[${0}][vat_percent_description]`}
                      sumTaxFree={`rows[${0}][sum_tax_free]`}
                      vat={`rows[${0}][vat]`}
                      sumWithVAT={`rows[${0}][sum_with_vat]`}
                      selectedStartDate={new Date('1900-01-01')}
                      selectedEndDate={new Date('3000-01-01')}/>
  ],
  rowCounter: 1,
  rowKeys: [],
  invoiceRows: [],
  apiInvoices: []
}

const invoiceReducer = (state = initialState, action) => {

  switch (action.type) {

    case SESSION_TERMINATED:
    case USER_EXPIRED:
      return Object.assign({}, {...state}, {invoiceRows: []})

    case GET_INVOICES_SUCCESS:
      return Object.assign({}, {...state}, {invoiceRows: _createInvoiceRow(action.invoices)})

    case CALCULATE_INVOICE_SUM:
      return Object.assign( {}, state, {
        rowKeys: state.rowKeys.concat(action.key)
      })

    case ADD_INVOICE_ROW:
      //const formValues = getFormValues('invoice')(store.getState())

      const rowState = state.invoiceInputRows
      return Object.assign( {}, state, {
        invoiceInputRows: rowState.concat(_createInputRow(state.rowCounter)),
        rowCounter: state.rowCounter + 1
      })

    case REMOVE_INVOICE_ROW:
      return Object.assign( {}, state,  {
        invoiceInputRows: state.invoiceInputRows.filter((el, index) => index !== action.rowNumber)
      })

    case MIN_DATE_CHANGE:

      const updatedInvoiceMinDateRows = state.invoiceInputRows.map((el) => {
        if (parseInt(el.key) === parseInt(action.rowNumber)) {
          const startDate = action.value ? new Date(action.value) : new Date('1900-01-01')
          const updatedProps = Object.assign({}, el.props, {
            selectedStartDate: new Date(startDate)
          })
          el = Object.assign({}, el, { props: { ...updatedProps } })
        }
        return el
      })

      return Object.assign({}, state, {
        invoiceInputRows: updatedInvoiceMinDateRows
      })

    case MAX_DATE_CHANGE:

      const updatedInvoiceMaxDateRows = state.invoiceInputRows.map((el) => {
        if (parseInt(el.key) === parseInt(action.rowNumber)) {
          const endDate = action.value ? new Date(action.value) : new Date('3000-01-01')
          const updatedProps = Object.assign({}, el.props, {
            selectedEndDate: new Date(endDate)
          })
          el = Object.assign({}, el, { props: { ...updatedProps } })
        }
        return el
      })

      return Object.assign({}, state, {
        invoiceInputRows: updatedInvoiceMaxDateRows
      })

    case QUANTITY_CHANGE:
      _calculateRowSum(action.rowNumber)
      return state

    case QUANTITY_PRICE_CHANGE:
      _calculateRowSum(action.rowNumber)
      return state

    case ON_INVOICE_REVIEW:
      _updateTotalSum()
      return state

    default:
      return state
  }
}

const _updateTotalSum = () => {

  const formValues = getFormValues('invoice')(store.getState())

  let totalSum = 0
  formValues.rows.forEach(el => {

    if (!formValues['rows'][el.key]) {
      formValues['rows'][el.key] = {}
    }

    totalSum += parseFloat(formValues['rows']['sum_with_vat'].replace(/,/g, '.'))
    console.log(totalSum)
  })

  formValues['total_sum'] = totalSum
}

const _calculateRowSum = rowNumber => {

  const formValues = getFormValues('invoice')(store.getState())

  const quantity = formValues['rows'][rowNumber]['quantity'] || '0'
  const formQuantity = parseFloat(quantity.replace(/,/g, '.'))

  const quantityPrice = formValues['rows'][rowNumber]['quantity_price'] || '0'
  const formQuantityPrice = parseFloat(quantityPrice.replace(/,/g , '.'))

  const sum = formQuantity * formQuantityPrice
  const vat = formValues['rows'][rowNumber]['vat_percent'] / 100

  formValues['rows'][rowNumber]['sum_tax_free'] = new Intl.NumberFormat('fi-FI', {
    style: 'currency',
    currency: 'EUR'
  }).format(sum)

  formValues['rows'][rowNumber]['vat'] = new Intl.NumberFormat('fi-FI', {
    style: 'currency',
    currency: 'EUR'
  }).format(sum * vat)

  formValues['rows'][rowNumber]['sum_with_vat'] = new Intl.NumberFormat('fi-FI', {
    style: 'currency',
    currency: 'EUR'
  }).format(sum * (vat + 1))

  formValues['rows'][rowNumber]['vat_percent_description'] = `${formValues['rows'][rowNumber]['vat_percent']} %`
}

const _createInvoiceRow = (invoices) => invoices.map(el => <InvoiceRow key={el.id}
                                                                       updated_at={new DateTimeFormat('fi', {
                                                                         day: 'numeric',
                                                                         month: 'numeric',
                                                                         year: 'numeric'
                                                                       }).format(new Date(el.updated_at))}
                                                                       due_date={new DateTimeFormat('fi', {
                                                                         day: 'numeric',
                                                                         month: 'numeric',
                                                                         year: 'numeric'
                                                                       }).format(new Date(el.due_date))}
                                                                       customer={el.company_name}
                                                                       invoice_id={el.id}
                                                                       totalSumWithVAT={new Intl.NumberFormat('fi-FI', {
                                                                         style: 'currency',
                                                                         currency: 'EUR'
                                                                       }).format(el.total_sum_with_vat)}
                                                                       state={el.state}
                                                                       funcions=""/>)

const _createInputRow = (index) => [ <InvoiceInputRow  key={index}
                                                       description={`rows[${index}][description]`}
                                                       startDate={`rows[${index}][start_date]`}
                                                       endDate={`rows[${index}][end_date]`}
                                                       quantity={`rows[${index}][quantity]`}
                                                       unit={`rows[${index}][unit]`}
                                                       quantityPrice={`rows[${index}][quantity_price]`}
                                                       vatPercent={`rows[${index}][vat_percent]`}
                                                       vatPercentDescription={`rows[${index}][vat_percent_description]`}
                                                       sumTaxFree={`rows[${index}][sum_tax_free]`}
                                                       vat={`rows[${index}][vat]`}
                                                       sumWithVAT={`rows[${index}][sum_with_vat]`}
                                                       selectedStartDate={new Date('1900-01-01')}
                                                       selectedEndDate={new Date('3000-01-01')}/> ]

export default invoiceReducer


/*

 */
