import registerForm from '../../src/reducers/register.reducer'
import { SIGNUP_FORM_SUBMIT } from '../../src/constants'

describe('λ Sign-up Reducer', () => {
  it('handles SIGNUP FORM SUBMIT', () => {

    const initialState = { }
    const action = {
      type: SIGNUP_FORM_SUBMIT,
      firstName:  'Jim',
      lastName:   'Raynor',
      email:      'jim.raynor@phz.fi',
      password:   'pass'
    }

    const newState = registerForm(initialState, action)

    expect(newState).to.eql({
      firstName:  'Jim',
      lastName:   'Raynor',
      email:      'jim.raynor@phz.fi',
      password:   'pass'
    })
  })

  it('handles Default', () => {

    const initialState = { }
    const action = {
      type: 'I_AM_LOST',
      firstName: 'Judged',
      lastName: 'Dredd',
      email: 'judged.dredd@event-horizon.glx',
      password: 'rdx'
    }

    const newState = registerForm(initialState, action)

    expect(newState).to.eql({ })
  })
})
