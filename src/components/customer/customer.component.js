import React from 'react'
import { Field } from 'redux-form'

import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn
} from  'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { renderTextField, renderSelectField } from '../../utils/wrappers'

/**
 * @author  Skylar Kong
 */

export default class CustomerComponent extends React.Component {

  componentWillMount() {
    // this.props.getCustomersStart()
  }

  render() {
    return <Customer {...this.props} />
  }
}

const _onFormSubmit = (values, e) => {
  e.preventDefault()
}

const Customer = ({
  customerRows,
  countryItems,
  invoiceItems,
  handleSubmit
}) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section className="container-fluid">
      <section className="row">
        <section className="dashboard-content-header">
          <h1>Asiakkaat</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
      <section className="row">
        <section className="dashboard-content-header">
          <section className="col-xs-12 col-sm-12 col-lg-12">
            <section className="panel panel-default">
              <section className="panel-heading">
                <h3 className="panel-title">Asiakkaat</h3>
              </section>
              <section className="panel-body">
                {createCustomerRows(customerRows)}
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="row">
        <section className="dashboard-content-header">
          <h1>LUO UUSI ASIAKAS</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
      <form onSubmit={handleSubmit(_onFormSubmit)}>
        <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-6 col-lg-6">
              {customerInfo(countryItems)}
            </section>
            <section className="col-xs-12 col-sm-6 col-lg-6">
              {invoiceInfo(invoiceItems)}
            </section>
          </section>
        </section>
      </form>
    </section>

  </MuiThemeProvider>

const customerInfo = (countryItems) =>
  <section className="panel panel-default">
    <section className="panel-heading">
      <h3 className="panel-title">Asiakkaan yhteystiedot</h3>
    </section>
    <section className="panel-body" style={{marginBottom: '25px'}}>
      <section>
        <Field name="country"
               component={renderSelectField}
               maxHeight={200}
               label="Maa *">
          {countryItems}
        </Field>
      </section>
      <section>
        <Field name="company_name" component={renderTextField}
               label="Yrityksen nimi *"/>
      </section>
      <section>
        <Field name="business_id" component={renderTextField}
               label="Y-Tunnus *"/>

      </section>
      <section>
        <Field name="person_to_contact" component={renderTextField}
               label="Yhteyshenkilön nimi *"/>
      </section>
      <section>
        <Field name="person_to_contact_email" component={renderTextField}
               label="Yhteyshenkilön sähköposti *"/>
      </section>
    </section>
  </section>

const invoiceInfo = (invoiceItems) =>
  <section className="panel panel-default">
    <section className="panel-heading">
      <h3 className="panel-title">Laskun toimitustapa</h3>
    </section>
    <section className="panel-body" style={{marginBottom: '25px'}}>
      <section>
        <Field name="delivery_method"
               component={renderSelectField}
               label="Laskun toimitustapa *">
          {invoiceItems}
        </Field>
      </section>
      <section>
        <Field name="delivery_address"
               component={renderTextField}
               label="Laskutusosoite"/>
      </section>
      <section>
        <Field name="zip_code" component={renderTextField}
               label="Postinumero"/>
      </section>
      <section>
        <Field name="city" component={renderTextField}
               label="Postitoimipaikka"/>
      </section>
      <section>
        <Field name="web_invoice" component={renderTextField}
               label="Verkkolaskuosoite"/>
      </section>
    </section>
  </section>

const createCustomerRows = (customerRows) =>
  <section>
    <Table selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Asiakas</TableHeaderColumn>
          <TableHeaderColumn>Yhteyshenkilö</TableHeaderColumn>
          <TableHeaderColumn>Sähköposti</TableHeaderColumn>
          <TableHeaderColumn>Osoite</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {customerRows}
      </TableBody>
    </Table>
  </section>
