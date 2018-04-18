import { expect } from 'chai'

import * as actions from '../../src/actions'
import * as types from '../../src/constants'

describe('λ Actions', () => {

  describe('addInvoiceRow', () => {
    it('creates an action to add a row to the invoice', () => {
      const expectedAction = {
        type: types.ADD_INVOICE_ROW
      }

      expect(actions.addInvoiceRow()).to.eql(expectedAction)
    })
  })
  describe('removeInvoiceRow', () => {
    it('creates an action to remove a row from the invoice', () => {
      const rowNumber = '0'
      const expectedAction = {
        type: types.REMOVE_INVOICE_ROW,
        rowNumber
      }

      expect(actions.removeInvoiceRow(rowNumber)).to.eql(expectedAction)
    })
  })
  describe('loadInvoiceReview', () => {
    it('creates an action to load an invoice from backend', () => {
      const expectedAction = {
        type: types.LOAD_INVOICE_REVIEW
      }

      expect(actions.loadInvoiceReview()).to.eql(expectedAction)
    })
  })
  describe('saveAndSendInvoice', () => {
    it('creates an action to save and send an invoice', () => {
      const expectedAction = {
        type: types.SAVE_AND_SEND_INVOICE
      }

      expect(actions.saveAndSendInvoice()).to.eql(expectedAction)
    })
  })
  describe('minDateChange', () => {
    it('creates an action to detect minimum date\'s change', () => {
      const value = '2017-01-01'
      const rowNumber = '0'
      const expectedAction = {
        type: types.MIN_DATE_CHANGE,
        value,
        rowNumber
      }

      expect(actions.minDateChange(value, rowNumber)).to.eql(expectedAction)
    })
  })
  describe('maxDateChange', () => {
    it('creates an action to detect maximum date\'s change', () => {
      const value = '2017-01-01'
      const rowNumber = '0'
      const expectedAction = {
        type: types.MAX_DATE_CHANGE,
        value,
        rowNumber
      }
      expect(actions.maxDateChange(value, rowNumber)).to.eql(expectedAction)
    })
  })

  describe('quantityChange', () => {
    it('creates an action to change quantity', () => {
      const val = '9'
      const rowNumber = '8'
      const expectedAction = {
        type: types.QUANTITY_CHANGE,
        val,
        rowNumber
      }

      expect(actions.quantityChange(val, rowNumber)).to.eql(expectedAction)
    })
  })

  describe('quantityPriceChange', () => {
    it('creates an action to change quantity price', () => {
      const val = '56'
      const rowNumber = '7'
      const expectedAction = {
        type: types.QUANTITY_PRICE_CHANGE,
        val,
        rowNumber
      }

      expect(actions.quantityPriceChange(val, rowNumber)).to.eql(expectedAction)
    })
  })

  describe('calculateInvoiceSum', () => {
    it('creates an action to calculate invoice\'s sum', () => {
      const key = 0
      const expectedAction = {
        type: types.CALCULATE_INVOICE_SUM,
        key
      }

      expect(actions.calculateInvoiceSum(key)).to.eql(expectedAction)
    })
  })

  describe('calculateDuedate', () => {
    it('creates an action to calculate invoice\'s due date', () => {
      const date = new Date()
      const rowNumber = '0'
      const expectedAction = {
        type: types.CALCULATE_INVOICE_DUEDATE,
        date
      }

      expect(actions.calculateDuedate(date)).to.eql(expectedAction)
    })
  })

  describe('postTaxCard', () => {
    it('creates an action to post a tax card', () => {
      const e = {event: true}
      const rowNumber = '0'
      const expectedAction = {
        type: types.POST_TAX_CARD,
        e
      }

      expect(actions.postTaxCard(e)).to.eql(expectedAction)
    })
  })

  describe('getInvoicesStart', () => {
    it('creates an action to get invoice\'s start', () => {
      const expectedAction = {
        type: types.GET_INVOICES_START
      }

      expect(actions.getInvoicesStart()).to.eql(expectedAction)
    })
  })

  describe('getInvoicesSuccess', () => {
    it('creates an action to get invoice\'s success', () => {
      const invoices = [{invoice: 1}, {invoice: 2}]
      const expectedAction = {
        type: types.GET_INVOICES_SUCCESS,
        invoices
      }

      expect(actions.getInvoicesSuccess(invoices)).to.eql(expectedAction)
    })
  })

  describe('loginFormSubmit', () => {
    it('creates an action to submit the login form', () => {
      const username = 'tester'
      const password = 'testerpassword'
      const expectedAction = {
        type: types.LOGIN_FORM_SUBMIT,
        username,
        password
      }

      expect(actions.loginFormSubmit(username, password)).to.eql(expectedAction)
    })
  })
  describe('registerFormSubmit', () => {
    it('creates an action to submit the register form', () => {
      const firstName = "tester"
      const lastName = "testersLastname"
      const email = "email@email.com"
      const password = "testerpassword"
      const expectedAction = {
        type: types.SIGNUP_FORM_SUBMIT,
        firstName, lastName, email, password
      }

      expect(actions.registerFormSubmit(firstName, lastName, email, password)).to.eql(expectedAction)
    })
  })
})
