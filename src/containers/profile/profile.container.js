import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import ProfileComponent from '../../components/profile/profile.component'

import { profileValidate as validate } from '../validate'
import { profileAsyncValidate as asyncValidate } from '../asyncValidate'
import { profileUpdate, loadProfileStart } from '../../actions'

let ProfileContainer = reduxForm({
  form: 'profile',
  validate,
  asyncValidate
})(ProfileComponent)

const mapStateToProps = state => {
  return {
    state
  }
}


const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    onProfileUpdate: () => dispatch(profileUpdate()),
    loadProfileStart: () => dispatch(loadProfileStart())
  }
}


ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

export default ProfileContainer
