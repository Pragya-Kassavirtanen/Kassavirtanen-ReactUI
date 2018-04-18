import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui'
import { Link } from 'react-router'

const InvoiceRow = ({
  id,
  updated_at,
  due_date,
  customer,
  invoice_id,
  totalSumWithVAT,
  state,
  functions
}) =>
  <TableRow key={id}>
    <TableRowColumn>
      {customer}
    </TableRowColumn>
    <TableRowColumn>
      {invoice_id}
    </TableRowColumn>
    <TableRowColumn>
      {updated_at}
    </TableRowColumn>
    <TableRowColumn>
      {due_date}
    </TableRowColumn>
    <TableRowColumn>
      {totalSumWithVAT}
    </TableRowColumn>
    <TableRowColumn>
      {state}
    </TableRowColumn>
    <TableRowColumn>
      {functions}
      <Link to="/dashboard/invoice/edit">Muokkaa</Link>
    </TableRowColumn>
  </TableRow>

export default InvoiceRow
