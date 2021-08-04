import { Component, Input, OnInit } from '@angular/core';
import { BankTransferService } from '../services/bank-transfer.service';
import { Transfers } from '../models/transfers.model';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.scss']
})
export class AccountStatementComponent implements OnInit {

  //use if need to pass as a parameter on the html
  // @Input() transfersData: any[] = [];
  transfersData: any[] = [];

  constructor(private bankTransferService: BankTransferService) { }

  ngOnInit(): void {
    // this.transfersData = this.bankTransferService.getTransfers();
    this.bankTransferService.getAllTransfers().subscribe(
      (transfers: Transfers[]) => {
        console.log(transfers);
        this.transfersData = transfers;
      }
    );
  }

}
