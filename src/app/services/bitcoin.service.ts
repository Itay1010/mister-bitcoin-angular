import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  async getRate() {
    return this.http.get<number>('https://blockchain.info/tobtc?currency=USD&value=1')
  }
  getMarketPrice() {

  }

  getConfirmedTransactions() {

  }
}
