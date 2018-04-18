import { getFormValues } from 'redux-form'

import store from '../store'
import {
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILED
} from '../constants'

const profileReducer = (state = {}, action) => {

  switch (action.type) {

    case LOAD_PROFILE_SUCCESS:
      const formValues = getFormValues('profile')(store.getState())
      console.log(formValues)
      console.log('hello')
      break

    default:
      return state
  }
}

export default profileReducer
