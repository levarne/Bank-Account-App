import { AppError } from './AppError'

/**
 * throw when unable to withdraw funds from an account
 */
class UnableToWithdrawFundsError extends AppError {
  constructor (message: string = 'Unable to with draw funds, Insufficient funds.') {
    super(message)
  }
}

export { UnableToWithdrawFundsError }
