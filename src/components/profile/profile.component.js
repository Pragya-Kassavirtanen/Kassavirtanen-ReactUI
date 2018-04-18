import React from 'react'
import { Field } from 'redux-form'

import RaisedButton from 'material-ui/RaisedButton'

import {
  renderTextField,
  renderCheckbox
} from '../../utils/wrappers'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

export default class ProfileComponent extends React.Component {

  componentWillMount() {
    this.props.loadProfileStart()
  }

  render() {
    return <Profile {...this.props}/>
  }
}

const Profile = ({ handleSubmit, onProfileUpdate }) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section className="container-fluid">
      <section className="row">
        <section className="dashboard-content-header">
          <h1>Muokkaa omia tietojasi</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
      <section className="row">
        <section className="dashboard-content-header">
          <section className="col-xs-8 col-sm-8 col-lg-8">
            <section className="panel panel-default">
              <form onSubmit={handleSubmit(() => onProfileUpdate())}>
                <section className="panel-body">
                  <section className="formSplit">
                    <Field name="last_name" label="Sukunimi*" component={renderTextField}/>
                    <Field name="first_name" label="Etunimi*" component={renderTextField}/>
                    <Field name="phone" label="Puhelinnumero*" component={renderTextField}/>
                    <Field name="bank_number" label="Tilinumero IBAN-muodossa*" component={renderTextField}/>
                    <section className="divider">
                      <Field name="is_show_phone" label="Näytä puhelinnumero laskulla" component={renderCheckbox}/>
                    </section>
                  </section>
                  <section className="formSplit">
                    <Field name="address" label="Osoite*" component={renderTextField}/>
                    <Field name="zip_code" label="Postinumero*" component={renderTextField}/>
                    <Field name="city" label="Postitoimipaikka*" component={renderTextField}/>
                    <Field name="marketing_name" label="Markkinointinimi" component={renderTextField}/>
                    <Field name="title" label="Ammattinimike" component={renderTextField}/>
                  </section>
                </section>
              </form>
              <section className="panel-footer is-plain clearfix">
                <section className="button-pull">
                  <RaisedButton type="submit" label="Päivitä yhteystiedot" primary={true}/>
                </section>
              </section>
            </section>
          </section>
          <section className="col-xs-4 col-sm-4 col-lg-4">
            <section className="panel panel-default">
              <section className="panel-heading">
                <h3 className="panel-title">Ohjeet</h3>
              </section>
              <section className="panel-body">
                <p>Syötä yhteystietosi lomakkeelle. Syötä myös markkinointinimesi, jos haluat sen näkymään laskulle.</p>
              </section>
            </section>
          </section>
        </section>
      </section>

      <section className="row">
        <section className="dashboard-content-header">
          <h1>Vaihda salasana</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
      <section className="row">
        <section className="dashboard-content-header">
          <section className="col-xs-8 col-sm-8 col-lg-8">
            <section className="panel panel-default">
              <section className="panel-body">
                <section className="formSplit">
                  <Field name="current_pw" label="Nykyinen salasana" component={renderTextField}/>
                  <Field name="new_pw" label="Uusi salasana" component={renderTextField}/>
                  <Field name="check_pw" label="Toista uusi salasana" component={renderTextField}/>
                </section>
              </section>
              <section className="panel-footer is-plain clearfix">
                <section className="button-pull">
                  <RaisedButton type="submit" label="Vaihda salasana" primary={true}/>
                </section>
              </section>
            </section>
          </section>
          <section className="col-xs-4 col-sm-4 col-lg-4">
            <section className="panel panel-default">
              <section className="panel-heading">
                <h3 className="panel-title">Ohjeet</h3>
              </section>
              <section className="panel-body">
                <p>Salasanan tulee sisältää vähintään:</p>
                <ul>
                  <li>8 merkkiä</li>
                  <li>pieniä ja isoja kirjaimia</li>
                  <li>numeroita</li>
                </ul>
              </section>
            </section>
          </section>
        </section>
      </section>

      <section className="row">
        <section className="dashboard-content-header">
          <h1>Salasana hukassa?</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
      <section className="row">
        <section className="dashboard-content-header">
          <section className="col-xs-8 col-sm-8 col-lg-8">
            <section className="panel panel-default">
              <section className="panel-body">
                <section className="formSplit">
                  <Field name="email"
                         label="Sähköpostiosoite"
                         component={renderTextField}/>
                </section>
              </section>
              <section className="panel-footer is-plain clearfix">
                <section className="button-pull">
                  <RaisedButton type="submit" label="Palauta salasana" primary={true}/>
                </section>
              </section>
            </section>
          </section>
          <section className="col-xs-4 col-sm-4 col-lg-4">
            <section className="panel panel-default">
                <section className="panel-heading">
                  <h3 className="panel-title">Ohjeet</h3>
                </section>
                <section className="panel-body">
                  <p>Oletko unohtanut salasanasi? Tilaa uusi salasana antamalla sähköpostiosoitteesi.</p>
                </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  </MuiThemeProvider>
