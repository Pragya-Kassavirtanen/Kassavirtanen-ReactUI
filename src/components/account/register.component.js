import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Panel } from 'react-bootstrap'
import { TextField, RaisedButton, FlatButton, Checkbox } from 'material-ui'
import FontAwesome from 'react-fontawesome'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import registerFormSubmit from '../../actions'

//import Messages from '../notifications/Messages'
//import Errors from '../notifications/Errors'


/**
 * The register view
 *
 * @author  Skylar Kong
 */

class RegisterComponent extends Component {

  onFormSubmit = (values) => {
    console.log("RegisterValues:: ", values)      
    this.props.registerFormSubmit(values)     
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div className="form-register-container">
            <Panel className="form-register-content">
              <div>
                <FlatButton
                  backgroundColor="#3F5B96"
                  hoverColor="#3F7796"
                  icon={<FontAwesome style={{color: 'white'}} name="facebook-square" size="2x" />}
                />
              </div>
              <div className="form-register-oauth">
                <FlatButton
                  backgroundColor="#F32E06"
                  hoverColor="#F25805"
                  icon={<FontAwesome style={{color: 'white'}} name="google-plus-square" size="2x" />}
                />
              </div>
              <div className="form-hr-before">
                <hr className="form-hr" />
              </div>
              <div>
                <Field name="email" component={renderTextField} label="Sähköposti*" type="text"/>
              </div>
              <div>
                <Field name="password" component={renderTextField} label="Salasana*" type="password"/>
              </div>
              <div>
                <Field name="passwordConfirmation" component={renderTextField} label="Vahvista salasana*" type="password"/>
              </div>
              <div className="form-register-checkbox">
                <Field name="checkbox" label="Hyväksyn käyttöehdot" component={renderCheckbox} />
              </div>
              <div className="form-register-btn">
                <RaisedButton label="Rekisteröidy palveluun" primary={true} className="form-register-button" type="submit"/>
              </div>
            </Panel>
          </div>
        </form>
      </MuiThemeProvider>
    )
  }
}

// Wrappers for the Material-UI
const renderTextField = ({ input, label, hintText, meta: { touched, error }, ...custom }) => (
  <TextField hintText={hintText} style={{ textAlign: 'left'}}
             floatingLabelText={label}
             errorText={touched && error}
             {...input}
             {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
            checked={!!input.value}
            onCheck={input.onChange}/>
)


export default RegisterComponent
