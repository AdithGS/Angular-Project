import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  cnt:any;
  searchData: { id: string; actname: string; date: string; aFund: number; expense: number; } | undefined;
  index:any
  acttype: any;
  actselect: any;
  

  constructor(private modalService: NgbModal,public activity_service:ActivityService) { }

  ngOnInit(): void {
    this.cnt=this.activity_service.len()
  }


  element:any
  closeResult = ''


  open(role_modal: any) {
    this.modalService.open(role_modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  /*detail modal*/
  detail(content: any): void {
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
      return  `with: ${reason}`;
    }
  }
  


deleteAct(){
  this.activity_service.events.splice(this.index,1);
  console.log( this.activity_service.events.splice(this.index,1))
}        



  save(){
  
    this.element = document.getElementsByClassName('abc');
  
    this.acttype = document.getElementById("catgtype")
    this.actselect = this.acttype.options[this.acttype.selectedIndex].text
    const data={
      actname:this.element.frm.actName.value,
      date:this.element.frm.actDate.value,
      id:this.element.frm.actID.value,
      type:this.actselect

     
      
    }
    console.log(data,"data")
    this.activity_service.pushData(data)
   }
  

/*pagination*/
p= 1;
count= 8;



}
