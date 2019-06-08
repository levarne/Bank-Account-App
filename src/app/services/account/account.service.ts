import { Injectable } from '@angular/core'
import { ACMEAccount } from '../../lib/types/model/ACMEAccount'
import { catchError, map, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { LoggerService } from '../logger/logger.service'
import { from, Observable, of, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

/**
 * Service responsible for  managing accounts
 */
export class AccountService {
  accountsUrl = 'http://localhost:8080/api/accounts' // ToDO get from config

  constructor (private http: HttpClient, private logger: LoggerService) {}

  /**
   * Set an accounts new balance
   */
  setBalance (account: ACMEAccount, withDrawAmount: number): Observable<any> {
    return from([1])
      .pipe(
        tap(_ => this.logger.debug(`Account balance ${withDrawAmount} updated successfully :: `, account)),
        catchError(this.handleError<Array<ACMEAccount>>('getAccounts', []))
      )
  }

  /**
   * Get all accounts
   */
  getAccounts (): Observable<Array<ACMEAccount>> {
    return this.http.get<Array<ACMEAccount>>(this.accountsUrl)
      .pipe(
        tap(accounts => this.logger.debug('Fetched accounts successful :: ', accounts)),
        catchError(this.handleError<Array<ACMEAccount>>('getAccounts', []))
      )
  }

  /**
   * Get a single account
   */

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      this.logger.error(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
