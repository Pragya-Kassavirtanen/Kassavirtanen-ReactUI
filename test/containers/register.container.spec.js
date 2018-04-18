import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
// import sinon from 'sinon'

import RegisterContainer from '../../src/containers/register.container'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

let wrapper
const mockStore = configureStore([])
const store = mockStore({})

// FIXME: Investigate the issue with images.
// log: 17 02 2017 09:27:21.534:WARN [web-server]: 404: /[object%20Object]

describe('λ Register View', () => {

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <RegisterContainer/>
      </Provider>
    )
  })

  it('renders register form', () => {
    expect(wrapper.text()).to.contains('Sähköposti')
  })

})
