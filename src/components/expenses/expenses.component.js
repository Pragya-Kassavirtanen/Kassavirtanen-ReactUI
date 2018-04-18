import React from 'react'

import {
  RaisedButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow } from  'material-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

/**
 * @author  PHZ-developers
 */

export default class NewExpensesComponent extends React.Component {

  componentWillMount() {
    this.props.getInvoicesStart()
  }

  render() {
    return <NewExpenses {...this.props}/>
  }
}

const _onFormSubmit = (values, e) => {
  e.preventDefault()

  console.log(values)
}

const NewExpenses = ({
  travelExpenseRows,
  expenseRows,
  handleSubmit
}) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <section className="container-fluid">
      <section className="row">
        <section className="dashboard-content-header">
          <h1>Kulukorvaukset</h1>
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
                {createdExpenseRows(expenseRows)}
              </section>
              <section className="panel-footer is-plain clearfix">
                <section className="button-pull">
                  <RaisedButton type="submit" label="+ Luo uusi kululasku" primary={true}/>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <section className="row">
        <section className="dashboard-content-header">
          <h1>Luomasi matka- ja päivärahakorvaukset</h1>
        </section>
      </section>
      <section className="dashboard-content-header">
        <hr/>
      </section>
      <form onSubmit={handleSubmit(_onFormSubmit)}>
        <section className="row">
          <section className="dashboard-content-header">
            <section className="col-xs-12 col-sm-12 col-lg-12">
              <section className="panel panel-default">
                <section className="panel-heading">
                  <h3 className="panel-title">Luomasi laskut</h3>
                </section>
                <section className="panel-body">
                  {createdTravelExpenseRows(travelExpenseRows)}
                </section>
                <section className="panel-footer is-plain clearfix">
                  <section className="button-pull">
                    <RaisedButton type="submit" label="+ Luo uusi matkakorvaus" primary={true}/>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </form>
    </section>
  </MuiThemeProvider>

const createdExpenseRows = (expenseRows) =>
  <section>
    <Table selectable={false} >
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Laskun asiakas</TableHeaderColumn>
          <TableHeaderColumn>Laskun tila</TableHeaderColumn>
          <TableHeaderColumn>Osto pvm</TableHeaderColumn>
          <TableHeaderColumn>Ostopaikka</TableHeaderColumn>
          <TableHeaderColumn>Summa</TableHeaderColumn>
          <TableHeaderColumn>Tila</TableHeaderColumn>
          <TableHeaderColumn>Tominnot</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {expenseRows}
      </TableBody>
    </Table>
  </section>

const createdTravelExpenseRows = (travelExpenseRows) =>
  <section>
    <Table selectable={false} >
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Laskun asiakas</TableHeaderColumn>
          <TableHeaderColumn>Laskun tila</TableHeaderColumn>
          <TableHeaderColumn>Matka-aika</TableHeaderColumn>
          <TableHeaderColumn>Reitti</TableHeaderColumn>
          <TableHeaderColumn>Summa</TableHeaderColumn>
          <TableHeaderColumn>Tila</TableHeaderColumn>
          <TableHeaderColumn>Tominnot</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {travelExpenseRows}
      </TableBody>
    </Table>
  </section>

