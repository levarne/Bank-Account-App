import { Component, OnInit } from '@angular/core'
import { map } from 'rxjs/operators'
import { AccountService } from '../../services/account/account.service'
import { AccountFactory } from '../../lib/factories/AccountFactory'
import { LoggerService } from '../../services/logger/logger.service'
import { ACMEAccount } from '../../lib/types/model/ACMEAccount'
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-bs-account-list',
  templateUrl: './bs-account-list.component.html',
  styleUrls: ['./bs-account-list.component.scss']
})

/**
 * Render a list of Accounts
 */
export class BsAccountListComponent implements OnInit {
  classname = 'BsAccountListComponent'

  accounts: Array<ACMEAccount>
  totalACMEBalance: number = 0

  constructor (private accountService: AccountService, private messageService: MessageService, private logger: LoggerService) {}

  ngOnInit () {
    this.getAccounts()
  }

  /**
   * Get list of observable accounts
   */
  getAccounts (): void {
    this.logger.debug(this.classname,'Fetching accounts for ACME account list.')
    this.accountService.getAccounts()
      .pipe(
        map(accounts => accounts.map(account => AccountFactory.getAccountByType(account['account_type'], account)))
      ).subscribe(accounts => {
        this.accounts = accounts
        this.updateTotalACMEBalance()
      })
  }

  /**
   * withDraw triggered by an event from app-bs-account-with-draw-drop-down
   */
  withDraw ({ account, withdrawAmount }: {account: ACMEAccount, withdrawAmount: string}): void {
    const amount = -withdrawAmount

    this.logger.debug(this.classname, `Withdraw from ${account.number}, an amount of ${withdrawAmount}`, account)
    this.accountService.setBalance(account, amount)
      .subscribe(async () => {
        try {
          if (account.setBalance(amount)) this.messageService.apply('Success')
        } catch (error) {
          this.logger.error(this.classname, `errorType: ${error.constructor.name} - message: ${error.message}`, account)
          this.messageService.apply(error.message)
        }

        this.updateTotalACMEBalance()
      })
  }

  /**
   * Set the total for all ACME accounts
   */
  updateTotalACMEBalance (): void {
    this.totalACMEBalance = 0
    this.accounts.forEach(account => this.totalACMEBalance += account.balance)
  }
}
