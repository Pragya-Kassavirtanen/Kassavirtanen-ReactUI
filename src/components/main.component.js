require('normalize.css/normalize.css')
require('styles/sass/main.scss')

import React from 'react'

import Header from './layout/header.component'
import Account from './account/account.component'
import Footer from './layout/footer.component'

/**
 * The main component for handling user authentication requests.
 *
 * @author Skylar Kong
 */

const Main = ({ children, user, navItems, handleManualLogout }) => {

  return (
    <section>
      <Header user={user} navItems={navItems} handleManualLogout= {handleManualLogout}/>
      { children }
      { !user || user.expired ? <Account/> : <section/> }
      <Footer/>
    </section>
  )
}

export default Main
