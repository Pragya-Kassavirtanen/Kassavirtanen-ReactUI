import React from 'react'
import { TextField, Checkbox, SelectField, DatePicker } from 'material-ui'
import DateTimeFormat from './DateTimeFormat'

export const renderTextField = ({ input, label, disabled, hintText, meta: { touched, error }, ...custom }) => (
  <TextField hintText={hintText} style={{ textAlign: 'left' }}
             className="dashboard-input-wrapper"
             floatingLabelText={label}
             errorText={ touched && error }
             {...input}
             onFocus={ e => e.target.select()  }
             disabled={disabled}
             {...custom}/>
)

// Warning: Failed prop type: Invalid prop `value` of type `string` supplied to `DatePicker`, expected `object`.
export const renderDatePicker = ({ input, hintText, container, mode, meta: { touched, error }, minDate, maxDate, onChangeCallback, ...custom}) => (
  <DatePicker hintText={hintText}
              mode={mode}
              errorText={ touched && error }
              {...input}
              onChange={ (e, val) => {
                input.onChange(val)
                onChangeCallback(val)
              } }
              onDismiss={ (e, val) => {
                input.onChange(val)
                onChangeCallback(val)
              }}
              {...custom}
              formatDate={new DateTimeFormat('fi', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
              }).format }
              container={container}
              value={input.value}
              minDate={minDate}
              maxDate={maxDate}/>
)

export const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
            checked={!!input.value}
            onCheck={input.onChange}/>
)

export const renderSelectField = ({ input, maxHeight, fullWidth, label, meta: { touched, error }, children }) => (
  <SelectField floatingLabelText={label}
               fullWidth={fullWidth}
               errorText={ touched && error }
               {...input}
               maxHeight={maxHeight}
               onChange={(event, index, value) => input.onChange(value)}
               children={children}/>
)

export const renderInputFile = ({ input, id }) => (
  <input type="file" id={id} onChange={input.onChange} />
)
