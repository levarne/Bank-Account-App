export const canWithDraw = (minBalance: number, balance: number, withDrawAmount: number): Boolean => {
  return (balance + withDrawAmount) >= minBalance
}
