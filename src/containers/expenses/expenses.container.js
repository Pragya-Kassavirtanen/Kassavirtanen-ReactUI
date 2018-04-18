import { connect } from 'react-redux'
import { reduxForm, getFormValues } from 'redux-form'

import NewExpensesComponent from '../../components/expenses/expenses.component'

import { invoiceValidate as validate } from '../validate'
import { invoiceAsyncValidate as asyncValidate } from '../asyncValidate'

import { addInvoiceRow, removeInvoiceRow, getInvoicesStart, onInvoiceReview } from '../../actions'
import DateTimeFormat from '../../utils/DateTimeFormat'
import {
  countryItems, invoiceItems, unitItems, overdueItems, titleItems, alvItems, alvPercentageItems
} from '../../utils/invoice.utils'

/**
 * The high order container for the invoice component
 *
 * @author  Skylar Kong
 *
 */

let date = new Date()
let NewExpensesComponentContainer = reduxForm({
  form: 'invoice',
  destroyOnUnmount: false,
  initialValues: {
    country: 'Suomi',
    delivery_method: 'Sähköposti',
    delivery_address: 'Kalevankatu 9',
    invoice_reference: '835847',
    person_to_contact: 'Skylar Kong',
    person_to_contact_email: 'skylar.kong@gmail.com',
    overdue: 14,
    workDescription: 'Valitse ammattinimike',
    rows: {
      0: {
        quantity: '0',
        quantity_price: '0',
        vat_percent: 24,
        description: 'Kissa',
        unit: 'kpl',
        sum_tax_free: new Intl.NumberFormat('fi-FI', {
          style: 'currency',
          currency: 'EUR'
        }).format(0)
      }
    },
    description: 'Summer Day',
    customer: '',
    web_invoice: '8485759',
    job_title: '',
    zip_code: '00100',
    city: 'Helsinki',
    company_name: 'Tarha Oy',
    business_id: '283848757',
    state: '',
    salary_status: '',
    due_date: new DateTimeFormat('fi', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }).format(date.setDate(date.getDate() + 14)),
    creation_date: new DateTimeFormat('fi', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }).format(date),
    updated_at: new DateTimeFormat('fi', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }).format(date)

  },
  validate,
  asyncValidate
})(NewExpensesComponent)

// To be called every time when the store is updated
const mapStateToProps = (state) => {

  const formValues = getFormValues('invoice')(state)
  formValues.due_date = dueDate(formValues.overdue)

  const invoiceInputRows = state.invoice.invoiceInputRows

  // FIXME: TO BE REFACTORED
  let totalSum = 0
  invoiceInputRows.forEach(el => {

    if (!formValues['rows'][el.key]) {
      formValues['rows'][el.key] = {}
    }

    const quantity = formValues['rows'][el.key]['quantity'] || '0'
    const formQuantity = parseFloat(quantity.replace(/,/g, '.'))

    const quantityPrice = formValues['rows'][el.key]['quantity_price'] || '0'
    const formQuantityPrice = parseFloat(quantityPrice.replace(/,/g , '.'))

    const sum = formQuantity * formQuantityPrice
    const vat = formValues['rows'][el.key]['vat_percent'] / 100

    formValues['rows'][el.key]['sum_tax_free'] = new Intl.NumberFormat('fi-FI', {
      style: 'currency',
      currency: 'EUR'
    }).format(sum)

    formValues['rows'][el.key]['vat'] = new Intl.NumberFormat('fi-FI', {
      style: 'currency',
      currency: 'EUR'
    }).format(sum * vat)

    formValues['rows'][el.key]['sum_with_vat'] = new Intl.NumberFormat('fi-FI', {
      style: 'currency',
      currency: 'EUR'
    }).format(sum * (vat + 1))

    formValues['rows'][el.key]['vat_percent_description'] = `${formValues['rows'][el.key]['vat_percent']} %`
    totalSum += sum * (vat + 1)

  })

  formValues['total_sum_with_vat'] = totalSum

  // FIXME: EOF

  return {
    user: state.oidc.user,
    invoiceInputRows: invoiceInputRows,
    invoiceRows: state.invoice.invoiceRows,
    countryItems,
    invoiceItems,
    overdueItems,
    unitItems,
    alvItems,
    alvPercentageItems,
    titleItems
  }
}

const dueDate = (overdue) => {
  let date = new Date()
  return new DateTimeFormat('fi', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  }).format(date.setDate(date.getDate() + overdue))
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getInvoicesStart: () => dispatch(getInvoicesStart()),
    addInvoiceRow: () => dispatch(addInvoiceRow()),
    removeInvoiceRow: () => dispatch(removeInvoiceRow()),
    onInvoiceReview: () => dispatch(onInvoiceReview())
  }
}

const mergeProps = ( stateProps, dispatchProps, ownProps ) => Object.assign({}, stateProps, dispatchProps, ownProps)

NewExpensesComponentContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewExpensesComponentContainer)

export default NewExpensesComponentContainer
