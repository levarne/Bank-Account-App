import { from, Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ACMEAccount } from '../../lib/types/model/ACMEAccount'
import { LoggerService } from '../logger/logger.service'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

/**
 * Service responsible for  managing accounts
 */
export class AccountService {
  classname = 'AccountService'
  accountsUrl = environment.accountService.host

  constructor (private http: HttpClient, private logger: LoggerService) {}

  /**
   * Set an accounts new balance
   */
  setBalance (account: ACMEAccount, withDrawAmount: number): Observable<any> {
    return from([1])
      .pipe(
        tap(_ => this.logger.debug(this.classname, `Amount withdrawn successfully.`, account)),
        catchError(this.handleError<Array<ACMEAccount>>('getAccounts', []))
      )
  }

  /**
   * Get all accounts
   */
  getAccounts (): Observable<Array<ACMEAccount>> {
    return this.http.get<Array<ACMEAccount>>(this.accountsUrl)
      .pipe(
        tap(accounts => this.logger.debug(this.classname,'Fetched accounts successfully.', accounts)),
        catchError(this.handleError<Array<ACMEAccount>>('getAccounts', []))
      )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logger.error(this.classname,`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
