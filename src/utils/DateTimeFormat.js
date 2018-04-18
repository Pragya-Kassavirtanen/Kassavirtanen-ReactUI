import areIntlLocalesSupported from 'intl-locales-supported'

/**
 * The high order container for the invoice component
 *
 * @author  Skylar Kong
 *
 */

let DateTimeFormat

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fi'])) {
  DateTimeFormat = global.Intl.DateTimeFormat
} else {
  const IntlPolyfill = require('intl')
  DateTimeFormat = IntlPolyfill.DateTimeFormat
  require('intl/locale-data/jsonp/fi')
}

export const formatFiToISO = (dateArray) => new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`)

export default DateTimeFormat
