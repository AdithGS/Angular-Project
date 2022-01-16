import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  static events(events: any): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  public events = [
    {"id":"100","actname":"Blood Donation Camp","date":"29/01/2020","aFund":25000,"expense":20500,"status":"active","remarks":"Blood donor camp conducted.","type":"Cultural"},
    {"id":"101","actname":"Inter-Club Badminton","date":"3/03/2020","aFund":10000,"expense":12000,"status":"completed","remarks":"Blood donor camp conducted.","type":"Festival"},
    {"id":"102","actname":"Tatva Cultural Event","date":"18/4/2020","aFund":35000,"expense":30000,"status":"cancelled","remarks":"Blood donor camp conducted.","type":"Meeting"},
    {"id":"103","actname":"Stem Cell Awareness","date":"29/5/2020","aFund":7000,"expense":7000,"status":"expired","remarks":"Blood donor camp conducted.","type":"Meetingl"},
    {"id":"104","actname":"Onam Celebration","date":"15/7/2020","aFund":15000,"expense":15000,"status":"complete","remarks":"Blood donor camp conducted.","type":"General"},
    {"id":"105","actname":"xyz event","date":"23/1/2021","aFund":25000,"expense":20500,"status":"cancelled","remarks":"Blood donor camp conducted.","type":"Festival"},
    {"id":"106","actname":"Stem Cell Donation","date":"13/3/2021","aFund":8000,"expense":8500,"status":"active","remarks":"Blood donor camp conducted.","type":"Other"},
    {"id":"107","actname":"Sports Meet","date":"13/3/2021","aFund":8000,"expense":8500,"status":"active","remarks":"Blood donor camp conducted.","type":"Other"},
    {"id":"108","actname":"Park Inaugration","date":"13/3/2021","aFund":8000,"expense":8500,"status":"expired","remarks":"Blood donor camp conducted.","type":"Meeting"},
    {"id":"109","actname":"Teranis Tech Event","date":"13/3/2021","aFund":8000,"expense":8500,"status":"expire","remarks":"Blood donor camp conducted.","type":"Meeting"},
    {"id":"110","actname":"Substance Abuse Awareness","date":"13/3/2021","aFund":8000,"expense":8500,"status":"active","remarks":"Blood donor camp conducted.","type":"Festival"},
    {"id":"111","actname":"Medical Camp","date":"13/3/2021","aFund":8000,"expense":8500,"status":"active","remarks":"Blood donor camp conducted.","type":"General"},
  ] 
  pushData(data:any){
    this.events.unshift(data)
    console.log(this.events,"events")
  }

  len(){
    return this.events.length;
   }
}
