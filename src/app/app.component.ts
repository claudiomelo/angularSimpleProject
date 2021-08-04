import { Component } from '@angular/core';
import { BankTransferService } from './services/bank-transfer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1';

  transfersData: any[] = [];
  constructor(private bankTransferService: BankTransferService)
  {

  }

  transferOutput($event:any)
  {
    // this.bankTransferService.addTransfer($event)
    // const transfer = {...$event, date: new Date()};
    this.transfersData.push($event);
  }

  showErros(message:string)
  {
    alert('message:'+message);
  }
}
