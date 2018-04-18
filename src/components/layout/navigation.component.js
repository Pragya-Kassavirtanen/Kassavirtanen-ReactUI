import React from 'react'
import { Link } from 'react-router'

import NavIcon from './navicon.component'

/**
 * Bootstrap styled navigation bar
 *
 * @author Skylar Kong
 */

const brandLogo = require('../../images/kassavirtanen-logo.png')
const Navigation = () =>
  <header className="navbar navbar-default">
    <section className="container-fluid dashboard-header-insecure">
      <nav className="dashboard-header-brand">
        <section>
          <Link to="/dashboard">
            <img className="navbar-brand dashboard-nav-brand" src={brandLogo} />
          </Link>
        </section>
      </nav>
      <section className="nav navbar-nav pull-right">
        <ul className="nav nav-tabs">
          <li>
            <a className="dashboard-nav-linklist" href="http://kassavirtanen.phz.fi/">
              <NavIcon name="sign-out" size="2x" content="Etusivulle"/>
            </a>
          </li>
        </ul>
      </section>
    </section>
  </header>

export default Navigation
