import { AccountType } from '../types/enum/accountType'
import { ChequeAccount } from '../model/ChequeAccount'
import { SavingsAccount } from '../model/SavingsAccount'
import { ACMEAccount } from '../types/model/ACMEAccount'

/**
 * Responsible for returning a type of ACMEAccount
 */
class AccountFactory<T> {
  static getAccountByType (type: AccountType, data: any): ACMEAccount {
    switch (type) {
      case AccountType.CHEQUE:
        return new ChequeAccount<ACMEAccount>(data)
      case AccountType.SAVINGS:
        return new SavingsAccount<ACMEAccount>(data)
    }
  }
}

export { AccountFactory }
