import {
  LOGIN_FORM_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  CLIENT_SET,
  CLIENT_UNSET,

  SIGNUP_FORM_SUBMIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,

  CALCULATE_INVOICE_SUM,
  CALCULATE_INVOICE_DUEDATE,
  ADD_INVOICE_ROW,
  REMOVE_INVOICE_ROW,
  GET_INVOICES_SUCCESS,
  GET_INVOICES_START,
  LOAD_INVOICE_REVIEW,
  POST_TAX_CARD,
  SAVE_AND_SEND_INVOICE,
  MIN_DATE_CHANGE,
  MAX_DATE_CHANGE,
  QUANTITY_CHANGE,
  QUANTITY_PRICE_CHANGE,
  ON_INVOICE_REVIEW,
  GET_INVOICES_FAILED,
  SAVE_INVOICE_SUCCESS,
  SAVE_INVOICE_FAILED,
  CHECK_AUTH_INFO,
  CHECK_AUTH_INFO_SUCCESS,
  CHECK_AUTH_INFO_FAILED,
  ON_PROFILE_UPDATE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAILED,
  LOAD_PROFILE_START
} from '../constants'

export const addInvoiceRow = () => ({ type: ADD_INVOICE_ROW })
export const removeInvoiceRow = rowNumber => ({ type: REMOVE_INVOICE_ROW, rowNumber })
export const loadInvoiceReview = () => ({ type: LOAD_INVOICE_REVIEW })
export const saveAndSendInvoice = () => ({ type: SAVE_AND_SEND_INVOICE })
export const minDateChange = (value, rowNumber) => ({ type: MIN_DATE_CHANGE, value, rowNumber })
export const maxDateChange = (value, rowNumber) => ({ type: MAX_DATE_CHANGE, value, rowNumber })
export const quantityChange = (val, rowNumber) => ({ type: QUANTITY_CHANGE, val, rowNumber})
export const quantityPriceChange = (val, rowNumber) => ({ type: QUANTITY_PRICE_CHANGE, val, rowNumber})
export const onInvoiceReview = () => ({ type: ON_INVOICE_REVIEW })

export const calculateInvoiceSum = key => ({ type: CALCULATE_INVOICE_SUM, key })
export const calculateDuedate = date => ({ type: CALCULATE_INVOICE_DUEDATE, date })

export const postTaxCard = (e) => ({ type: POST_TAX_CARD, e })

export const getInvoicesStart = () => ({ type: GET_INVOICES_START })
export const getInvoicesSuccess = invoices => ({ type: GET_INVOICES_SUCCESS, invoices })
export const getInvoicesFailed = error => ({ type: GET_INVOICES_FAILED, error })
export const saveInvoiceSuccess = result => ({ type: SAVE_INVOICE_SUCCESS, result})
export const saveInvoiceFailed = error => ({ type: SAVE_INVOICE_FAILED, error})

export const checkAuthInfo = () => ({ type: CHECK_AUTH_INFO })
export const checkAuthInfoSuccess = result => ({ type: CHECK_AUTH_INFO_SUCCESS, result })
export const checkAuthInfoFailed = error => ({ type: CHECK_AUTH_INFO_FAILED, error })

export const profileUpdate = () => ({ type: ON_PROFILE_UPDATE })
export const loadProfileStart = () => ({ type: LOAD_PROFILE_START })
export const loadProfileSuccess = (result) => ({ type: LOAD_PROFILE_SUCCESS, result })
export const loadProfileFailed = (error) => ({ type: LOAD_PROFILE_FAILED, error })

export const loginFormSubmit = (email, password) => ({ type: LOGIN_FORM_SUBMIT, email, password })
export const loginSuccess = result => ({ type: LOGIN_SUCCESS, result })
export const loginFailed = error => ({ type: LOGIN_FAILED, error })

export const setClient = (token) => ({ type: CLIENT_SET, token })
export const unsetClient = () => ({ type: CLIENT_UNSET })

export const registerFormSubmit = (email, password) => ({ type: SIGNUP_FORM_SUBMIT, email, password })
export const registerSuccess = result => ({ type: SIGNUP_SUCCESS, result })
export const registerFailed = error => ({ type: SIGNUP_FAILED, error })