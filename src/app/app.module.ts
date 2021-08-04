import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID , NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankTransferFormComponent } from './bank-transfer-form/bank-transfer-form.component';
import { FormsModule } from '@angular/forms';
import { AccountStatementComponent } from './account-statement/account-statement.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    BankTransferFormComponent,
    AccountStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
