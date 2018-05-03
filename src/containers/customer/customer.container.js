import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import CustomerComponent from '../../components/customer/customer.component'

import { addCustomerRow } from '../../actions'

import { countryItems, invoiceItems } from '../../utils/invoice.utils'

let CustomerContainer = reduxForm({
  form: 'customer',
  destroyOnUnmount: false,
  initialValues: {
    country: 'Suomi',
    delivery_method: 'Sähköposti'
  }
})(CustomerComponent)

const mapStateToProps = (state) => {
  return {
    countryItems,
    invoiceItems,
    state
  }
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
} */

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, stateProps, dispatchProps, ownProps)

CustomerContainer = connect(mapStateToProps, { addCustomerRow }, mergeProps)(CustomerContainer)

export default CustomerContainer
