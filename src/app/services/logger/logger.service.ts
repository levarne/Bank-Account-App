import { Injectable } from '@angular/core'
import { NGXLogger } from 'ngx-logger'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor (private logger: NGXLogger) { }

  info <T> (message: T, data = {}) {
    return this.logger.info(message, data)
  }

  debug <T> (message: T, data = {}) {
    return this.logger.info(message, data)
  }

  error <T> (message: T, data = {}) {
    return this.logger.info(message, data)
  }
}
