import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor() { }

  public tickets =[
    {"stype":"Payment Error","subject":"I need a help with payment gateway","other":"","status":"open"},
    {"stype":"","subject":"Service related announcement","other":"","status":"closed"},
    {"stype":"","subject":"Issue with updating member role","other":"","status":"pending"},
  ]
}
