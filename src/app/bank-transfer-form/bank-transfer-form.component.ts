import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BankTransferService } from '../services/bank-transfer.service';
import { Transfers } from '../models/transfers.model';

@Component({
  selector: 'app-bank-transfer-form',
  templateUrl: './bank-transfer-form.component.html',
  styleUrls: ['./bank-transfer-form.component.scss']
})
export class BankTransferFormComponent implements OnInit {

  constructor(private service: BankTransferService) {
  }

  ngOnInit(): void {
  }

  // @Output() whenTransfer = new EventEmitter<any>();
  @Output() errorsEmitter = new EventEmitter<string>();

  transferValue: number = 0;
  transferAccount: number = 0;

  title = 'BankTransferFormComponent';
  transfer(){
    if (this.validateValues()) {
	  	const data: Transfers = {
	  		transferValue: this.transferValue,
	  		transferAccount: this.transferAccount,
	  	}

	  	this.service.addTransfer(data).subscribe(result => {
		  	this.transferOutput2(result);
		  	this.cleanFields();
	  	},
	  	error => {
	  		console.log('error:', error)
	  	});
	  	// this.whenTransfer.emit(data);
    }
  }

  private validateValues() {
	if (this.transferValue < 1) {
	    this.errorsEmitter.emit('Inform a valid value.');
	    return false;
	}

	if (this.transferAccount < 1000) {
	    this.errorsEmitter.emit('Inform a valid account number.');
	    return false;
	}

	return true;
  }

  transferOutput2(result:Transfers){
    console.log('result:', result);
  }

  cleanFields()
  {
  	this.transferValue = 0;
  	this.transferAccount = 0;
  }

}
