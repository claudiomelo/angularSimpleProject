import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfers } from '../models/transfers.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankTransferService {

  private transfers:Transfers[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) { 
    this.transfers = [];
  }

  getTransfers()
  {
    return this.transfers;
  }

  getAllTransfers(): Observable<Transfers[]>
  {
    return this.httpClient.get<Transfers[]>(this.url);
  }

  addTransfer(transfer:Transfers): Observable<Transfers>
  {
    return this.httpClient.post<Transfers>(this.url, transfer);
    // this.hidratate(transfer)
    // this.transfers.push(transfer);
  }

  private hidratate(transfer:Transfers)
  {
    transfer.date = new Date();
  }
}
