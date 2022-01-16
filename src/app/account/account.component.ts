import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FeeService } from '../fee.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  closeResult = "";
  element: any;
  selectoption: any;
  user: any;
  userselect: any;
  type: any;
  select: any;
  members: any;
  memberselect: any;
  ftype: any;
  feeselect: any;
 

  constructor(public member:MembersService,private modalService: NgbModal,public feetype:FeeService,public account:AccountsService) { }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  // this.idtype=document.getElementById("idtype")
  // this.idselect=this.idtype.options[this.idtype.selectedIndex].text
  // console.log(this.idselect)

  // saveform(){
  //   this.element=document.getElementsByClassName('feetype')

  //   this.type=document.getElementById("feetypeSelect")
  //   this.select=this.type.options[this.type.selectedIndex].text
  //   console.log(this.userselect)


  
  //   const account={
  //     typeselect:this.select,
  //     fee:this.element.frm.feeamount.value,
  //     feeremark:this.element.frm.feeremark.value
     
  //   }
  //   console.log(account,"data")
  //   this.account.pushdata(account)
  //   console.log(account)
     
  // }




  save(){
  
    this.element = document.getElementsByClassName('feetype');
  
  
    this.members=document.getElementById("memberselect")
    this.memberselect=this.members.options[this.members.selectedIndex].text
    this.ftype=document.getElementById("feetypeSelect")
    this.feeselect=this.ftype.options[this.ftype.selectedIndex].text
    
    const data={
      member:this.memberselect,
      feetype:this.feeselect,
      remarks:this.element.frm.feeremark.value,
   feeamnt:this.element.frm.feeamount.value,


      
      
    }
    console.log(data,"data")
    this.account.pushdata(data)
   }
  
  
  /*****Pagination */
  p= 1;
  count = 10;


}
