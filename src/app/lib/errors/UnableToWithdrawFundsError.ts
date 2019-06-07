class UnableToWithdrawFundsError extends Error {
  constructor (messae: string = 'Unable to with draw funds.') {
    super(messae)
  }
}

export { UnableToWithdrawFundsError }
