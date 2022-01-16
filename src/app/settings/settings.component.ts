import { Component, OnInit } from '@angular/core';
import { FeeService } from '../fee.service';
import { MemberRoleService } from '../member-role.service';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public member:MemberRoleService,public fee:FeeService) { }
element:any
  ngOnInit(): void {
  }
  save(){
    this.element = document.getElementsByClassName('roleform');
    console.log(this.element)
    const data={
      designation:this.element.frm.designation.value,
      remarks:this.element.frm.remarks.value,
    
      
    }
    console.log(data,"data")
  this.member.pushData(data)
 }
  savefee(){
    this.element = document.getElementsByClassName('fee_form');
    console.log(this.element)
    const data={
      ftype:this.element.form.feetype.value,
      remarks:this.element.form.remarks.value,
    
      
    }
    console.log(data,"data")
  this.fee.pushData(data)
 }





   }


