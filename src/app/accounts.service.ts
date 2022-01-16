import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor() { }
  public accounts=[
    {"member":"Rohan","feetype":"Annual Renewal","feeamnt":"100","remarks":""},
    {"member":"Nripan","feetype":"Onam","feeamnt":"250","remarks":""}
  ]

  pushdata(data:any){
    this.accounts.unshift(data)
  }
}
