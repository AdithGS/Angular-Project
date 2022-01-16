import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberRoleService {
  pushmrole(mrole: { designation: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  public role = [
    {"designation":"Secretary","remarks":""},
    {"designation":"President","remarks":""},
    {"designation":"Finance Head","remarks":""},
  ]
  pushData(mrole:any){
    this.role.push(mrole)
    console.log(this.role,"designation")
  }
}
