import { SIGNUP_FORM_SUBMIT, SIGNUP_SUCCESS, SIGNUP_FAILED } from '../constants'

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

const registerForm = (state = initialState, action) => {

  switch (action.type) {

    case SIGNUP_FORM_SUBMIT:

      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      }

    case SIGNUP_SUCCESS:
    return {
      errors: [],
      messages: [{
        body: `Successfully created account for ${action.response.email}`,
        time: new Date(),
      }],
      requesting: false,
      successful: true,
    }     

    case SIGNUP_FAILED: 
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

export default registerForm