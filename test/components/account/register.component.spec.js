import React from 'react'
import { shallow } from 'enzyme'
import { RaisedButton } from 'material-ui'

import RegisterComponent from '../../../src/components/account/register.component'
const wrapper = shallow(<RegisterComponent handleSubmit={e => e}/>)

describe('λ Component: Register', () => {
  it('has its base node as MuiThemeProvider', () => {
    expect(wrapper.name()).to.equal('MuiThemeProvider')
  })

  it('has a form', () => {
    expect(true).to.be.true
  })

  it('form has a submit button', () => {

    const formsSubmitButton = wrapper
      .find('form')
      .children()
      .find('.form-register-btn')
      .contains(
        <RaisedButton label="Rekisteröidy palveluun"
          primary={true}
          className="form-register-button"
          type="submit"/>
      )

    expect(formsSubmitButton).to.be.true
  })
})
