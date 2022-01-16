import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  indexOf: any;
  selectedIndex: any;

  constructor(private http:HttpClient) { }

  // Some array of things.
  public users = [];
  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

  public user = [
    {"userid":"100","idNum":"L100","fname":"Rohan","lName":"Arvind","mob":9400437265,"address":"","email":"rohan@gmail.com","dob":"29/11/1997","blood":"o+","doj":"29/11/1997","photo":"assets/usr5.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"101","idNum":"L101","fname":"Anwar","lName":"Sadath","mob":9458742355,"address":"","email":"anwars@gmail.com","dob":"1/1/1998","blood":"A+","doj":"29/11/1997","photo":"assets/usr7.jfif","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Gold"},
    {"userid":"102","idNum":"L102","fname":"Tibin","lName":"George","mob":9495237265,"address":"","email":"tibingeorge@gmail.com","dob":"24/07/1999","blood":"o+","doj":"29/11/1997","photo":"assets/usr8.jfif","remarks":"Good Day","status":false,"role":"","id":"Passport","memtype":"Gold"},
    {"userid":"103","idNum":"L103","fname":"Anna","lName":"Maria","mob":8156302233,"address":"","email":"anna@gmail.com","dob":"29/5/1998","blood":"A+","doj":"29/11/1997","photo":"assets/usr10.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"104","idNum":"L104","fname":"Rohini","lName":"Sethu","mob":9487537265,"address":"","email":"rohini32@gmail.com","dob":"11/11/1995","blood":"o+","doj":"29/11/1997","photo":"assets/usr9.jpg","remarks":"Good Day","status":false,"role":"","id":"Driving License","memtype":"Silver"},
    {"userid":"105","idNum":"L105","fname":"Gokul","lName":"R","mob":7125437263,"address":"","email":"gokulr3@gmail.com","dob":"16/09/1998","blood":"AB+","doj":"29/11/1997","photo":"assets/usr6.jpg","remarks":"Good Day","status":false,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"106","idNum":"L106","fname":"Thasni","lName":"Moidu","mob":8546437265,"address":"","email":"thasnim@gmail.com","dob":"11/1/1997","blood":"o-","doj":"29/11/1997","photo":"assets/usr10.jpg","remarks":"Good Day","status":true,"role":"","id":"Passport","memtype":"Silver"},
    {"userid":"107","idNum":"L107","fname":"Najiya","lName":"C","mob":9105437267,"address":"","email":"najiya32@gmail.com","dob":"3/11/1997","blood":"o+","doj":"29/11/1997","photo":"assets/usr10.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"108","idNum":"L108","fname":"Ayana","lName":"K","mob":9400437155,"address":"","email":"ayana@gmail.com","dob":"6/07/1993","blood":"o+","doj":"29/11/1997","photo":"assets/usr4.jpg","remarks":"Good Day","status":false,"role":"","id":"Driving License","memtype":"Gold"},
    {"userid":"109","idNum":"L109","fname":"Adith","lName":"GS","mob":824537265,"address":"","email":"adithgs111@gmail.com","dob":"18/10/1997","blood":"Ab+","doj":"29/11/1997","photo":"assets/usr1.jfif","remarks":"Good Day","status":true,"role":"","id":"Driving License","memtype":"Platinum"},
    {"userid":"110","idNum":"L110","fname":"Tanvi","lName":"Ragav","mob":7400437346,"address":"","email":"tanvipai@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","id":"Aadhar","memtype":"Silver"},
    {"userid":"111","idNum":"L111","fname":"Raihan","lName":"Alvin","mob":8520437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"110","idNum":"L112","fname":"Tanvi","lName":"Ragav","mob":7400437346,"address":"","email":"tanvipai@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"111","idNum":"L113","fname":"Amal","lName":"Gosh","mob":8452125254,"address":"","email":"amal123@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Passport","memtype":"Gold"},
    {"userid":"112","idNum":"L114","fname":"Rahul","lName":"K","mob":7400437346,"address":"","email":"rahul1@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"113","idNum":"L115","fname":"Artha","lName":"S","mob":8520437874,"address":"","email":"arthas@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Passport","memtype":"Silver"},
    {"userid":"110","idNum":"L115","fname":"Aswin","lName":"Manoj","mob":7400437346,"address":"","email":"aswinm@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","id":"Aadhar","memtype":"Gold"},
    {"userid":"114","idNum":"L116","fname":"RJacob","lName":"Poli","mob":8520437874,"address":"","email":"rjacob@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Passport","memtype":"Platinum"},
    {"userid":"115","idNum":"L117","fname":"Mathew","lName":"Jacob","mob":7400437346,"address":"","email":"jacobmathew@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","memtype":"Silver"},
    {"userid":"116","idNum":"L118","fname":"Rihana","lName":"Monty","mob":8520437874,"address":"","email":"rihmontty@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Driving License","memtype":"Gold"},
    {"userid":"117","idNum":"L119","fname":"Bella","lName":"Rose","mob":7400437346,"address":"","email":"bellarose@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","id":"Driving License","memtype":"Silver"},
    {"userid":"118","idNum":"L120","fname":"Emily","lName":"Blunt","mob":8520437874,"address":"","email":"emilyblunt@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Gold"},
    {"userid":"119","idNum":"L121","fname":"Daniel","lName":"Radcliff","mob":7400437346,"address":"","email":"dradcliff@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","id":"Passport","memtype":"Platinum"},
    {"userid":"120","idNum":"L122","fname":"Tom","Halland":"Alvin","mob":8520437874,"address":"","email":"hallandtom@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Passport","memtype":"Silver"},
    {"userid":"121","idNum":"L123","fname":"Robert","lName":"Downey","mob":7400437346,"address":"","email":"rdowneyjr@gmail.com","dob":"19/05/1994","blood":"o+","doj":"29/11/1997","photo":"assets/usr2.jpg","remarks":"Good Day","status":false,"role":"","id":"Passport","memtype":"Silver"},
    {"userid":"122","idNum":"L124","fname":"Stella","lName":"Martin","mob":8520437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"122","idNum":"L125","fname":"Yadav","lName":"John","mob":8520437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Silver"},
    {"userid":"122","idNum":"L126","fname":"Hannah","lName":"Yong","mob":856537874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Gold"},
    {"userid":"122","idNum":"L127","fname":"Devu","lName":"Claire","mob":4540437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Driving LIcense","memtype":"Platinum"},
    {"userid":"122","idNum":"L128","fname":"Rebecca","lName":"Steph","mob":9820437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Silver"},
    {"userid":"122","idNum":"L129","fname":"Arvind","lName":"Jaga","mob":9874563874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Silver"},
    {"userid":"122","idNum":"L130","fname":"Gregory","lName":"Bagath","mob":80437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Passport","memtype":"Gold"},
    {"userid":"122","idNum":"L131","fname":"Sonniya","lName":"Alvin","mob":710437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Silver"},
    {"userid":"122","idNum":"L132","fname":"Arvind","lName":"s","mob":745437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Passport","memtype":"Gold"},
    {"userid":"122","idNum":"L133","fname":"Jagath","lName":"Luke","mob":6820437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Platinum"},
    {"userid":"122","idNum":"L134","fname":"Hisham","lName":"Pol","mob":4520437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Driving License","memtype":"Silver"},
    {"userid":"122","idNum":"L135","fname":"Anvin","lName":"Ram","mob":845437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Silver"},
    {"userid":"122","idNum":"L136","fname":"SRaina","lName":"H","mob":452437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Driving License","memtype":"Silver"},
    {"userid":"122","idNum":"L137","fname":"Steve","lName":"Alvin","mob":9920437874,"address":"","email":"raihan@gmail.com","dob":"8/06/1999","blood":"o-","doj":"29/11/1997","photo":"assets/usr3.jpg","remarks":"Good Day","status":true,"role":"","id":"Aadhar","memtype":"Platinum"},

  ]


  // getTour(){
  //  return this.http.get('https://first-try12345js.herokuapp.com/api/v1/tours')
  // }

  len(){
   return this.user.length;
  }
  pushData(data:any){
    this.user.unshift(data)
    console.log(this.user,"user")
  }
  pushmrole(mrole:any){
    this.user.unshift(mrole)
    console.log(this.user,"user")
  }
  
}
