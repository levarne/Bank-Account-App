import { Injectable } from '@angular/core'
import { NGXLogger } from 'ngx-logger'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor (private logger: NGXLogger) { }

  info <T> (classname: T, message: T, data: any = '') {
    return this.logger.info(`${classname} - ${message}`, data)
  }

  debug <T> (classname: T, message: T, data: any = '') {
    return this.logger.debug(`${classname} - ${message}`, data)
  }

  error <T> (classname: T, message: T, data: any = '') {
    return this.logger.error(`${classname} - ${message}`, data)
  }
}
