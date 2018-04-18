import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import LoginComponent from '../components/account/login.component'
import { loginFormSubmit } from '../actions'

import { registerValidate as validate } from './validate'
import { registerAsyncValidate as asyncValidate } from './asyncValidate'

/**
 * @author Pragya Gupta
 *
 */

 // Return a new decorated component
let LoginContainer = reduxForm({
  form: 'login',    
  validate,
  asyncValidate
})(LoginComponent)


const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

/*const mapDispatchToProps = (dispatch) => {

  return {
    onFormSubmit: (email, password) => {
      dispatch( loginFormSubmit(email, password ))
    }
  }
}*/

const mergeProps = ( stateProps, dispatchProps, ownProps ) => Object.assign( {}, stateProps, dispatchProps, ownProps)

LoginContainer = connect(mapStateToProps, { loginFormSubmit }, mergeProps)(LoginContainer)

export default LoginContainer
