import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicenseeService } from '../licensee.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  element: any;

  constructor(private router: Router,public licensee:LicenseeService) { }

  ngOnInit(): void {
  }


  signUp(){
    this.element=document.getElementsByClassName("landing")
    const data={
      email:this.element.frm.exampleInputEmail1.value,
      pswd:this.element.frm.exampleInputPassword1.value,
    }
    if(data.email==this.licensee.licensee[0].email && data.pswd==this.licensee.password)
    {
      this.router.navigate(['/dashboard/front-page'])
    }
   
    else
    {
      alert("Invalid Credentials")
    }
  }
}
