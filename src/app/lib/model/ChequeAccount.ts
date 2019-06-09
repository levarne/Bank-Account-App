import { ACMEAccount } from '../types/model/ACMEAccount'
import { canWithDraw } from '../helpers/AccountHelpers'
import { UnableToWithdrawFundsError } from '../errors/UnableToWithdrawFundsError'

/**
 * Represents a Cheque account
 */
class ChequeAccount<T> implements ACMEAccount {
  number: string
  type: string
  balance: number
  minBalance: number

  constructor ({ account_number, account_type, balance }) {
    this.number = account_number
    this.type = account_type
    this.balance = +balance

    this.minBalance = -500
  }

  /**
   * @inheritDoc
   */
  setBalance (withDrawAmount: number): boolean {
    if (canWithDraw(this.minBalance, this.balance, withDrawAmount)) {
      this.balance += withDrawAmount
      return true
    }

    throw new UnableToWithdrawFundsError()
  }
}

export { ChequeAccount }
