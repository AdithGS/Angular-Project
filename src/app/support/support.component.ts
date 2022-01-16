import { Component, OnInit } from '@angular/core';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  element: any;
  spttype: any;
  typeselect: any;

  constructor(public spt:SupportService) { }

  ngOnInit(): void {
  }


  // this.idtype=document.getElementById("idtype")
  // this.idselect=this.idtype.options[this.idtype.selectedIndex].text
  // console.log(this.idselect)
  

  saveTickets(){
    this.element=document.getElementsByClassName("supportForm")

    this.spttype=document.getElementById("supportType")
    this.typeselect=this.spttype.options[this.spttype.selectedIndex].text

    const data =[
      // stype:this.typeselect,
      
      
    ]
  }

}
