// Field validators
export const registerValidate = values => {

  const errors = { }
  const requiredFields = [ 'email' ]

  requiredFields.forEach(field => {
    if ( !values[ field ] ) {
      errors[ field ] = 'Sähköpostikenttä on pakollinen'
    }
  })

  if (!values[ 'password' ]) {
    errors.password = 'Salasanakenttä on pakollinen'
  }

  if (values[ 'password' ] !== values[ 'passwordConfirmation' ]) {
    errors.passwordConfirmation = 'Antamasi salasanat eivät täsmää'
  }

  if (!values[ 'passwordConfirmation' ]) {
    errors.passwordConfirmation = 'Salasanan vahvistus on pakollinen'
  }

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Antamasi sähköpostiosoite  on virheellinen'
  }

  return errors
}

export const invoiceValidate = values => {

  const errors = { }

  // Customer Info
  const requiredCustomerInfoFields = [
    'company_name', 'company_id', 'person_to_contact', 'person_to_contact_email'
  ]

  // Delivery Info
  const requiredDeliveryMethodFields = [
    'delivery_method'
  ]

  if(!/^\d{5}$/i.test(values['zip_code']) && values['zip_code']){
    errors['zip_code'] = 'Postinumero ei ole kelvollinen'
  }

  if (!/^\d(.*)$/i.test(values['invoice_reference'] && values['invoice_reference'])) {
    errors['invoice_reference'] = 'Viitenumero ei ole kelvollinen'
  }

  // Invoice Info
  const requiredInvoiceInfoFields = [
    'overdue', 'due_date', 'description'
  ]

  const requiredFields = [...requiredCustomerInfoFields, ...requiredDeliveryMethodFields, ...requiredInvoiceInfoFields]
  requiredFields.forEach(field => {
    if ( !values[ field ] ) {
      errors[ field ] = 'Kenttä on pakollinen'
    }
  })

  // Invoice rows
  //values['rows'].forEach((item) => {
    // Validation for each item
  //})

  return errors
}

export const profileValidate = values => {
  const errors = {}
  const requiredFields = [ 'last_name', 'first_name', 'address', 'phone', 'city', 'bank_number' ]

  requiredFields.forEach(field => {
    if ( !values [ field ] ) {
      errors[ field ] = 'Kenttä on pakollinen'
    }
  })
  if (!/^\d{5}$/i.test(values['zip_code']) && values['zip_code']) {
    errors['zip_code'] = 'Postinumero ei ole kelvollinen'
  }

  return errors
}
