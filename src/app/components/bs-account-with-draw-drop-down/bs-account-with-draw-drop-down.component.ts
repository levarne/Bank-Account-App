import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ACMEAccount } from '../../lib/types/model/ACMEAccount'

@Component({
  selector: 'app-bs-account-with-draw-drop-down',
  templateUrl: './bs-account-with-draw-drop-down.component.html',
  styleUrls: ['./bs-account-with-draw-drop-down.component.scss']
})

/**
 * Responsible for managing the withdraw button
 * It triggers an event to parent component
 */
export class BsAccountWithDrawDropDownComponent implements OnInit {
  @Input() account: ACMEAccount
  @Output() onWithdrawEvent: EventEmitter<any> = new EventEmitter()

  onWithdraw (account: ACMEAccount, withdrawAmount: string): void {
    this.onWithdrawEvent.emit({ account, withdrawAmount } as {account: ACMEAccount, withdrawAmount: string})
  }

  ngOnInit () {
  }

}
