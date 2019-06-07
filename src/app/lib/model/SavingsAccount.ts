import { ACMEAccount } from '../types/model/ACMEAccount'
import { canWithDraw } from '../helpers/AccountHelpers'

/**
 * Represents a Savings account
 */
class SavingsAccount<T> implements ACMEAccount {
  number: string
  type: string
  balance: number
  minBalance: number

  constructor ({ account_number, account_type, balance }) {
    this.number = account_number
    this.type = account_type
    this.balance = +balance

    this.minBalance = 0
  }

  /**
   * @inheritDoc
   */
  setBalance (withDrawAmount: number): boolean {
    if (canWithDraw(this.minBalance, this.balance, withDrawAmount)) {
      this.balance += withDrawAmount
      return true
    }

    return false
  }
}

export { SavingsAccount }
