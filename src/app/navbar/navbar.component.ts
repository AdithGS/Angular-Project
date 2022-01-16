import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicenseeService } from '../licensee.service';
import { MembersService } from '../members.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,public licensee:LicenseeService,public usercnt:MembersService) { }

  cnt:any
  lcn:any
  ngOnInit(): void {
    this.cnt=this.usercnt.len()

    this.lcn = this.licensee
    console.log(this.lcn)
  }
  myprofile(){
    this.router.navigate(['/dashboard/myprofile'])
  }
  pswd(){
    this.router.navigate(['/dashboard/resetpassword'])
  }

  logOut(){
    this.router.navigate(['/landing-page'])
  }
  editprofile(){
    this.router.navigate(['dashboard/editprofile'])
  }
}
