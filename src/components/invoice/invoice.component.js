import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router'

import {
  RaisedButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow } from  'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {
  renderSelectField,
  renderTextField
} from '../../utils/wrappers'

import InvoiceInputTable from './invoiceInputTable.component'

/**
 * @author  Skylar Kong
 */

export default class NewInvoiceComponent extends React.Component {

  componentWillMount() {
    this.props.getInvoicesStart()
  }

  render() {
    return <NewInvoice {...this.props}/>
  }
}

const _onFormSubmit = (values, e) => {
  e.preventDefault()

  console.log(values)
}

const NewInvoice = ({
  countryItems,
  invoiceItems,
  overdueItems,
  titleItems,
  invoiceInputRows,
  invoiceRows,
  addInvoiceRow,
  invalid,
  handleSubmit
}) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section className="container-fluid">
      <section className="row">
        <section className="dashboard-content-header">
          <h1>LUOMASI LASKUT</h1>
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
                <h3 className="panel-title">Luomasi laskut</h3>
              </section>
              <section className="panel-body">
                {createdInvoiceRows(invoiceRows)}
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="row">
        <section className="dashboard-content-header">
          <h1>LUO UUSI LASKU</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
      <form onSubmit={handleSubmit(_onFormSubmit)}>
      <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-6 col-lg-4">
              {customerInfo(countryItems)}
            </section>
            <section className="col-xs-12 col-sm-6 col-lg-4">
              {invoiceDeliveryMethod(invoiceItems)}
            </section>
              <section className="col-xs-12 col-sm-12 col-lg-4">
                {invoiceInfo(overdueItems, titleItems)}
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
                <InvoiceInputTable rows={invoiceInputRows} addInvoiceRow={addInvoiceRow}/>
              </section>
            </section>
          </section>
        </section>
        <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-12 col-lg-12">
              <section className="panel panel-default">
                <section className="panel-body">
                  <section className="pull-right">
                    { invalid
                      ? <RaisedButton label="Esikatsele ja hyväksy lasku"
                                      primary={true}
                                      type="submit"/>
                      : <RaisedButton label="Esikatsele ja hyväksy lasku"
                          primary={true}
                          type="submit"
                          containerElement={<Link to="/dashboard/invoice/review"></Link>}/>
                    }
                  </section>
                </section>
              </section>
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

const invoiceDeliveryMethod = (invoiceItems) =>
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

const invoiceInfo = (overdueItems, titleItems) =>
  <section className="panel panel-default">
    <section className="panel-heading">
      <h3 className="panel-title">Laskun tiedot</h3>
    </section>
    <section className="panel-body">
      <section>
        <Field name="overdue"
               component={renderSelectField}
               maxHeight={200}
               label="Maksuehto">
          {overdueItems}
        </Field>
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
               label="Yrityksen toivoma viite"/>
      </section>
      <section>
        <Field name="description"
               component={renderTextField}
               label="Vapaamuotoinen teksti *"
               multiLine={true} rows={2}/>
      </section>
      <section>
        <Field name="job_title"
               component={renderSelectField}
               maxHeight={200}
               label="Valitse ammattinimike">
          {titleItems}
        </Field>
      </section>
    </section>
  </section>

const createdInvoiceRows = (invoiceRows) =>
  <section>
    <Table selectable={false} >
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Asiakas</TableHeaderColumn>
          <TableHeaderColumn>Laskunro.</TableHeaderColumn>
          <TableHeaderColumn>Muokattu</TableHeaderColumn>
          <TableHeaderColumn>Eräpäivä</TableHeaderColumn>
          <TableHeaderColumn>Summa</TableHeaderColumn>
          <TableHeaderColumn>Tila</TableHeaderColumn>
          <TableHeaderColumn>Toiminnot</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {invoiceRows}
      </TableBody>
    </Table>
  </section>

