import React from 'react'

import LogIn from './login.component'

/**
 * The log-in view
 *
 * @author  Skylar Kong
 */

const AccountComponent = ({ children }) =>
  <section>
    <LogIn/>
    {children}
  </section>

export default AccountComponent
