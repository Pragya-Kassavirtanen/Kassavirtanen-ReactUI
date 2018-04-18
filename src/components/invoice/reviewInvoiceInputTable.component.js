import React from 'react'
import { Table, TableRow, TableHeader, TableHeaderColumn, TableBody } from  'material-ui'

const ReviewInvoiceInputTable =  ({ invoiceRows }) =>
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
            <TableHeaderColumn>Veroton</TableHeaderColumn>
            <TableHeaderColumn>Vero</TableHeaderColumn>
            <TableHeaderColumn>Yhteensä</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {invoiceRows}
        </TableBody>
      </Table>
    </section>
  </section>

export default ReviewInvoiceInputTable
