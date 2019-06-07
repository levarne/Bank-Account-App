/**
 * The base model for an account
 */
interface ACMEAccount {
  /**
   * The account unique identifier, number
   */
  readonly number: string

  /**
   * The type of account
   */
  readonly type: string

  /**
   * The balance of the account
   */
  readonly balance: number

  /**
   * The minimum balance an type of account can have
   */
  readonly minBalance: number

  /**
   * Sets the new balance for the account
   */
  setBalance (withDrawAmount: number): boolean
}

export { ACMEAccount }
