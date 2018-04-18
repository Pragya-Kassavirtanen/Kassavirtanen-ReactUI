import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Tax from '../../components/tax/tax.component'
import { postTaxCard } from '../../actions'

let TaxContainer = reduxForm({
  form: 'tax',
  initialValues: {
    taxCard: ' '
  }
})(Tax)


const mapStateToProps = state => {

  // const taxState = state.form.tax

  return {
    state
  }
}


const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    onFileUpload: (e) => dispatch(postTaxCard(e))
  }
}

// TODO: employ react-html-email to send a tax card to the administrator
// and save it to the backend
TaxContainer = connect(mapStateToProps, mapDispatchToProps)(TaxContainer)

export default TaxContainer
