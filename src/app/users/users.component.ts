import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MemberRoleService } from '../member-role.service';
import { MembersService } from '../members.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  closeResult = '';
  element: any;
  detail: any;
  index: any;
  searchData:any
  cnt: number | undefined;
  radio: any;
  idtype: any;
  idselect: any;
  membershiptype:any
  memselect: any;
  radioSel: any;
  

  constructor(private modalService: NgbModal,public member_service:MembersService,public role:MemberRoleService ) { }

  ngOnInit(): void {
    // this.member_service.getTour().subscribe(res => console.log(res))
    this.cnt=this.member_service.len()
  }

 save(){
  
  this.element = document.getElementsByClassName('abc');

  this.radio=document.querySelector('input[name="gender"]:checked')
  console.log(this.radio.value)

  this.idtype=document.getElementById("idtype")
  this.idselect=this.idtype.options[this.idtype.selectedIndex].text
  console.log(this.idselect)

  this.membershiptype=document.getElementById("memtype")
  this.memselect=this.membershiptype.options[this.membershiptype.selectedIndex].text
  console.log(this.memselect)
 


  console.log()
  const data={
    fname:this.element.frm.fname.value,
    lname:this.element.frm.lName.value,
    mob:this.element.frm.mob.value,
    idNum:this.element.frm.idNum.value,
    id:this.idselect,
  
    address:this.element.frm.address.value,
    gender:this.radio.value,
    memtype:this.memselect,
    email:this.element.frm.email.value,
    dob:this.element.frm.dob.value,
    blood:this.element.frm.blood.value,
    doj:this.element.frm.doj.value,
    photo:this.element.frm.photo.value,
    remarks:this.element.frm.remarks.value,
    
  }
  console.log(data,"data")
  this.member_service.pushData(data)
 }


 rolemanage(){

  this.radio=document.querySelector('input[name="member_role"]')


  // console.log(this.radio.value)
 
  const mrole ={
    designation:this.radio.value
  }
  console.log(mrole,)
  this.member_service.pushmrole(mrole)

 }


 
public date = new Date();




/*delete*/

removeUser(content:any,i:any) {
 
  console.log(i)
  this.modalService.open(content, {ariaLabelledBy: 'detailview',size: 'md'}).result.then((result) => {

    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  

  });
  this.index=i
  console.log(this.index,"sd")


}
rolechange(content:any,i:any) {
 
  console.log(i)
  this.modalService.open(content, {ariaLabelledBy: 'detailview',size: 'md'}).result.then((result) => {

    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  

  });
  this.index=i

  // console.log(this.index,"sd")


}
helo(ab:any){
  console.log(ab.target.value)
  // this.searchData=(this.member_service.user.filter(ele=>ele.fname ==ab.target.value || ele.mob==ab.target.value))
  this.searchData=(this.member_service.user.find(ele=>ele.fname==ab.target.value ))
  console.log(this.searchData)
}
removeUser1(){
  this.member_service.user.splice(this.index,1);
}
/*detailed view*/

view(tr:any) {
  const index=this.member_service.user.indexOf(tr)
  this.member_service.user.slice(index-1, index +1)
  console.log(this.member_service.user)
  console.log(this.member_service.user.slice(index, index +1))
  // this.detail=this.member_service.user.slice(index, index +1)
  console.log(this.member_service.user)             
// const idx =[this.member_service.user.slice(index, index +1)]

}



  open(content:any): void {
    this.detail=content
    console.log(this.detail.fname)
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  
  }
  modal( content:any,xy:any): void {
 
    // this.detail=content
    // console.log(this.detail)
    this.detail=xy
    console.log(this.detail)
    this.modalService.open(content, {ariaLabelledBy: 'detailview',size: 'xl'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  
  }


 


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }




  onItemChange(value: any){
    console.log(" Value is : ", value );
 }

  /*pagination*/
  p= 1;
  count= 8;



  
}
