import { LOGIN_FORM_SUBMIT, LOGIN_SUCCESS, LOGIN_FAILED  } from '../constants'

/**
 * @author  Pragya Gupta
 *
 */

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

const loginForm = (state = initialState, action) => {


  switch (action.type) {

    case LOGIN_FORM_SUBMIT:
    return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }

    case LOGIN_SUCCESS:
    return {
      errors: [],
      messages: [],
      requesting: false,
      successful: true,
    }     

    case LOGIN_FAILED: 
    return {
      errors: state.errors.concat([{
        body: action.error.toString(),
        time: new Date(),
      }]),
      messages: [],
      requesting: false,
      successful: false,
    }

    default: return state

  }
}

export default loginForm
