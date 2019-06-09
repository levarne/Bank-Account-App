import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { BootstrapModule } from './modules/bootstrap.module'
import { SpacePipe } from './pipes/space.pipe'

import { AppComponent } from './app.component'
import { BsAccountListComponent } from './components/bs-account-list/bs-account-list.component'
import { AccountFactory } from './lib/factories/AccountFactory'
import { AccountService } from './services/account/account.service'
import { LoggerService } from './services/logger/logger.service'
import { MessageService } from './services/message.service'
import { BsAccountWithDrawDropDownComponent } from './components/bs-account-with-draw-drop-down/bs-account-with-draw-drop-down.component'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    BsAccountListComponent,
    SpacePipe,
    BsAccountWithDrawDropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    HttpClientModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel[environment.log.level] }),
    FormsModule
  ],
  providers: [
    AccountFactory,
    AccountService,
    LoggerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
