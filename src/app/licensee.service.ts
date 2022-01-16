import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicenseeService {

  constructor() { }

  username="admin@gmail.com"
  password="123456"


  public licensee = [
    {"name":"Lions Club","id":"C101","logo":"assets/licenseelogo.png","num":8075981813,"email":"lionsclub@gmail.com","address":"Opp Nut Street,Vadakara","doj":"29/11/2021","remarks":""},
  ]

}
