import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import RegisterComponent from '../components/account/register.component'
import { registerFormSubmit } from '../actions'

import { registerValidate as validate } from './validate'
import { registerAsyncValidate as asyncValidate } from './asyncValidate'

/**
 *
 * @author  Skylar Kong
 *
 */

// Return a new decorated component
let RegisterContainer = reduxForm({
  form: 'register',  
  validate,
  asyncValidate
})(RegisterComponent)

const mapStateToProps = state => {
  return {
    registerForm: state.registerForm
  }
}

/*const mapDispatchToProps = dispatch => {

  return {
    onFormSubmit: (email, password) => {
      dispatch(registerFormSubmit(email, password))
    }
  }
}*/

// Passing the result of mapStateToProps, mapDispatchToProps, and the parent props
const mergeProps = ( stateProps, dispatchProps, ownProps ) => Object.assign( {}, stateProps, dispatchProps, ownProps)

// Connect does not modify the component class passed to it,
// instead it returns a new, connected component class

//RegisterContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(RegisterContainer)

RegisterContainer = connect(mapStateToProps, { registerFormSubmit })(RegisterContainer)

export default RegisterContainer
