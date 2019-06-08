import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  apply (message: string): void {
    const msg: string = message.trim()
    alert(msg)
  }
}
