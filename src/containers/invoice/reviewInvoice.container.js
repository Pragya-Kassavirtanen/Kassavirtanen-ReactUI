import { connect } from 'react-redux'
import { reduxForm, getFormValues } from 'redux-form'
import { loadInvoiceReview, saveAndSendInvoice } from '../../actions'

import ReviewInvoice from '../../components/invoice/reviewInvoice.component'

let ReviewInvoceContainer = reduxForm({
  form: 'invoiceReview',
  destroyOnUnmount: false,
  initialValues: {
    delivery_method: 'Sähköposti'
  }
})(ReviewInvoice)

const mapStateToProps = (state) => {
  let formInvoice = getFormValues('invoice')(state)
  const formInvoiceReview = getFormValues('invoiceReview')(state)

  formInvoice[Symbol.iterator] = function* () {
    const keys = Reflect.ownKeys(this)
    for (const key of keys) {
      yield [key, this[key]]
    }
  }

  for (const [key, value] of formInvoice) {
    formInvoiceReview[key] = value
  }

  return {
    invoiceRows: state.invoiceReviews.reviewRows,
    formValues: formInvoiceReview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    loadInvoiceReview: () => dispatch(loadInvoiceReview()),
    saveAndSendInvoice: () => dispatch(saveAndSendInvoice())
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({}, stateProps, dispatchProps, ownProps)

ReviewInvoceContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReviewInvoceContainer)

export default ReviewInvoceContainer
