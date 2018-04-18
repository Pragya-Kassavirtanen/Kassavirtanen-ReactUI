import React from 'react'
import { Table, TableRow, TableHeader, TableHeaderColumn, TableBody, RaisedButton } from  'material-ui'

const InvoiceInputTable =  ({ rows, addInvoiceRow }) =>
  <section className="panel-body">
    <section>
      <Table selectable={false} >
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Kuvaus</TableHeaderColumn>
            <TableHeaderColumn>Aloituspvm.</TableHeaderColumn>
            <TableHeaderColumn>Lopetuspvm</TableHeaderColumn>
            <TableHeaderColumn>Määrä</TableHeaderColumn>
            <TableHeaderColumn>Yksikkö</TableHeaderColumn>
            <TableHeaderColumn>á hinta</TableHeaderColumn>
            <TableHeaderColumn>ALV %</TableHeaderColumn>
            <TableHeaderColumn>Yhteensä (veroton) </TableHeaderColumn>
            <TableHeaderColumn>Poista</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {rows}
        </TableBody>
      </Table>
    </section>
    <section className="dashboard-invoice-add pull-right">
      <RaisedButton label="Lisää uusi rivi"
                    primary={true}
                    onClick={ addInvoiceRow }/>
    </section>
  </section>

export default InvoiceInputTable
