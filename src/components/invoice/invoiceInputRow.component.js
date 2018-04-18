import React from 'react'
import { Field } from 'redux-form'

import {
  TableRow,
  TableRowColumn,
  FlatButton } from  'material-ui'

import {
  renderSelectField,
  renderTextField,
  renderDatePicker
} from '../../utils/wrappers'

import { unitItems, alvPercentageItems } from '../../utils/invoice.utils'

import store from '../../store'
import { removeInvoiceRow, minDateChange, maxDateChange } from '../../actions'

import FontAwesome from 'react-fontawesome'

/**
 * @author  Skylar Kong
 */

const InvoiceInputRow = ({
  description,
  startDate,
  endDate,
  quantity,
  unit,
  quantityPrice,
  vatPercent,
  sumTaxFree,
  rowNumber,
  selectedStartDate,
  selectedEndDate
}) =>
  <TableRow className="dashboard-invoice-inputrow">
    <TableRowColumn>
      <Field name={description}
             component={renderTextField}/>
    </TableRowColumn>
    <TableRowColumn>
      <Field name={startDate}
             component={renderDatePicker}
             mode="landscape"
             onChangeCallback={(value) => store.dispatch(minDateChange(value, rowNumber))}
             maxDate={selectedEndDate}/>
    </TableRowColumn>
    <TableRowColumn>
      <Field name={endDate}
             component={renderDatePicker}
             mode="landscape"
             onChangeCallback={(value) => store.dispatch(maxDateChange(value, rowNumber))}
             minDate={selectedStartDate}/>
    </TableRowColumn>
    <TableRowColumn>
      <Field name={quantity}
             component={renderTextField}/>
    </TableRowColumn>
    <TableRowColumn className="dashboard-invoice-select">
      <Field name={unit}
             component={renderSelectField}>
        {unitItems}
      </Field>
    </TableRowColumn>
    <TableRowColumn>
      <Field name={quantityPrice}
             component={renderTextField}/>
    </TableRowColumn>
    <TableRowColumn className="dashboard-invoice-select">
      <Field name={vatPercent}
             component={renderSelectField}>
        {alvPercentageItems}
      </Field>
    </TableRowColumn>
    <TableRowColumn>
      <Field name={sumTaxFree}
             disabled={true}
             component={renderTextField}/>
    </TableRowColumn>
    <TableRowColumn>
      <FlatButton
        secondary={true}
        onClick={ () => store.dispatch(removeInvoiceRow(rowNumber)) }
        icon={<FontAwesome name="window-close" size="2x" />}
      />
    </TableRowColumn>
  </TableRow>

export default InvoiceInputRow
