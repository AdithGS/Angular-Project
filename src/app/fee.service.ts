import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor() { }
  public feetype = [
    {"ftype":"Annual Renewal","remarks":""},
    {"ftype":"Onam","remarks":""},
    {"ftype":"Annual Cultural Event","remarks":""},
  ]

  pushData(data:any){
    this.feetype.unshift(data)
    console.log(this.feetype)
  }
}
