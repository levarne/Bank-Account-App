/**
 * returns true / false, if an account can withdraw its funds, given a minimum balance
 */
export const canWithDraw = (minBalance: number, balance: number, withDrawAmount: number): Boolean => {
  return (balance + withDrawAmount) >= minBalance
}
