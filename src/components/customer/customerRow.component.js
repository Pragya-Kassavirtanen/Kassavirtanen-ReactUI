import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui'

const CustomerRow = ({
  id,
  companyName,
  contactPersonName,
  contactPersonEmail,
  address,
  zipCode,
  city
}) =>
  <TableRow key={id}>
    <TableRowColumn>
      {companyName}
    </TableRowColumn>
    <TableRowColumn>
      {contactPersonName}
    </TableRowColumn>
    <TableRowColumn>
      {contactPersonEmail}
    </TableRowColumn>
    <TableRowColumn>
      {`${address}\n${zipCode} ${city.toUpperCase()}`}
    </TableRowColumn>
  </TableRow>
