/**
 * @author Skylar Kong <skylar.kong@phz.fi>
 */

'use strict'

// TODO: Check why chai-enzyme is not working

import React from 'react'
import { shallow, mount } from 'enzyme'
import Account from 'components/account/account.component'
import SignIn from 'components/account/login.component'
import Register from 'components/account/register.component'

describe('λ Component: Account', () => {
  it('has its base node as div', () => {
    const wrapper = shallow(<Account/>)
    expect(wrapper.name()).to.equal('div')
  })

  it('has state isRegister', () => {
    expect(shallow(<Account/>)).to.have.state('isRegister')
  })

  it('shows Register when isRegister is set to true', () => {
    const wrapper = shallow(<Account/>)
    wrapper.setState({
      isRegister: true
    })

    expect(wrapper).to.contain(<Register/>)
  })

  it('doesn\'t show SignIn when isRegister is set to true', () => {
    const wrapper = shallow(<Account/>)
    wrapper.setState({
      isRegister: true
    })

    expect(wrapper).to.not.contain(<SignIn/>)
  })

  it('shows SignIn when isRegister is set to false', () => {
    const wrapper = shallow(<Account/>)
    wrapper.setState({
      isRegister: false
    })

    expect(wrapper).to.contain(<SignIn/>)
  })

  it('doesn\'t show Register when isRegister is set to false', () => {
    const wrapper = shallow(<Account/>)
    wrapper.setState({
      isRegister: false
    })

    expect(wrapper).to.not.contain(<Register/>)
  })

  it('has a handleregister method that toggles isRegister', () => {
    const wrapper = shallow(<Account/>)
    const stubEvent = {preventDefault: () => {}}
    wrapper.setState({
      isRegister: true
    })

    expect(wrapper).to.have.state('isRegister', true)
    wrapper.handleRegister(stubEvent)
    expect(wrapper).to.have.state('isRegister', false)
    wrapper.handleRegister(stubEvent)
    expect(wrapper).to.have.state('isRegister', true)
  })

})

