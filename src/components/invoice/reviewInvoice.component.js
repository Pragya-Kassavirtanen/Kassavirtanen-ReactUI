import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Field } from 'redux-form'
import { Link } from 'react-router'
import {
  RaisedButton
} from 'material-ui'

import { renderTextField } from '../../utils/wrappers'
import ReviewInvoiceInputTable from './reviewInvoiceInputTable.component'

export default class InvoiceRetro extends React.Component {
  componentWillMount() {
    this.props.loadInvoiceReview()
  }

  render() {
    return <ReviewInvoiceComponent { ...this.props }/>
  }
}

const ReviewInvoiceComponent = ({invoiceRows, saveAndSendInvoice}) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section className="container-fluid">
      <section className="row">
        <section className="dashboard-content-header">
          <h1>Esikatselu</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
        <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-6 col-lg-4">
              {ReviewCustomerInfo()}
            </section>
            <section className="col-xs-12 col-sm-6 col-lg-4">
              {ReviewInvoice()}
            </section>
            <section className="col-xs-12 col-sm-12 col-lg-4">
              {ReviewInvoiceInfo()}
            </section>
          </section>
        </section>
        <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-12 col-lg-12">
              <section className="panel panel-default">
                <section className="panel-heading">
                  <h3 className="panel-title">Laskutettavat tuotteet/palvelut</h3>
                </section>
                <ReviewInvoiceInputTable invoiceRows={invoiceRows}/>
              </section>
            </section>
          </section>
        </section>
        <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-12 col-lg-12">
              <section className="panel panel-default">
                <section className="panel-body">
                  <section className="pull-left">
                    <RaisedButton label="<< Takaisin"
                                  primary={true}
                                  containerElement={<Link to="/dashboard/invoice"></Link>}/>
                  </section>
                  <section className="pull-right">
                    <RaisedButton label="Tallenna ja lähetä"
                                  onClick={saveAndSendInvoice}
                                  primary={true}/>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
    </section>
  </MuiThemeProvider>

const ReviewInvoice = () =>
  <section className="panel panel-default">
    <section className="panel-heading">
      <h3 className="panel-title">Laskun esikatselu</h3>
    </section>
    <section className="panel-body" style={{marginBottom: '25px'}}>
      <section>
        <Field name="delivery_method"
               component={renderTextField}
               label="Laskun toimitustapa *"
               disabled={true}/>
      </section>
      <section>
        <Field name="delivery_address"
               component={renderTextField}
               label="Laskutusosoite"
               disabled={true}/>
      </section>
      <section>
        <Field name="zip_code" component={renderTextField}
               label="Postinumero"
               disabled={true}/>
      </section>
      <section>
        <Field name="city" component={renderTextField}
               label="Postitoimipaikka"
               disabled={true}/>
      </section>
      <section>
        <Field name="web_invoice" component={renderTextField}
               label="Verkkolaskuosoite"
               disabled={true}/>

      </section>
    </section>
  </section>

const ReviewCustomerInfo = () =>
  <section className="panel panel-default">
    <section className="panel-heading">
      <h3 className="panel-title">Asiakkaan yhteystiedot</h3>
    </section>
    <section className="panel-body" style={{marginBottom: '25px'}}>
      <section>
        <Field name="country"
               component={renderTextField}
               label="Maa *"
               disabled={true}/>
      </section>
      <section>
        <Field name="company_name" component={renderTextField}
               label="Yrityksen nimi *"
               disabled={true}/>
      </section>
      <section>
        <Field name="company_id" component={renderTextField}
               label="Y-Tunnus *"
               disabled={true}/>

      </section>
      <section>
        <Field name="person_to_contact" component={renderTextField}
               label="Yhteyshenkilön nimi *"
               disabled={true}/>
      </section>
      <section>
        <Field name="person_to_contact_email" component={renderTextField}
               label="Yhteyshenkilön sähköposti *"
               disabled={true}/>
      </section>
    </section>
  </section>

const ReviewInvoiceInfo = () =>
  <section className="panel panel-default">
    <section className="panel-heading">
      <h3 className="panel-title">Laskun tiedot</h3>
    </section>
    <section className="panel-body">
      <section>
        <Field name="overdue"
               component={renderTextField}
               label="Maksuehto"
               disabled={true}/>
      </section>
      <section>
        <Field name="due_date"
               component={renderTextField}
               disabled={true}
               label="Eräpäivä"/>
      </section>
      <section>
        <Field name="invoice_reference"
               component={renderTextField}
               label="Yrityksen toivoma viite"
               disabled={true}/>
      </section>
      <section>
        <Field name="description"
               component={renderTextField}
               label="Vapaamuotoinen teksti *"
               multiLine={true} rows={2}
               disabled={true}/>
      </section>
      <section>
        <Field name="job_title"
               component={renderTextField}
               label="Valitse ammattinimike"
               disabled={true}/>
      </section>
    </section>
  </section>
