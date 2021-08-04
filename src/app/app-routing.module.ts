import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { BankTransferFormComponent } from './bank-transfer-form/bank-transfer-form.component';

export const routes: Routes = [
  {path: '', redirectTo: 'account-statement', pathMatch: 'full'},
  {path: 'account-statement', component: AccountStatementComponent},
  {path: 'new-transfer', component: BankTransferFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
