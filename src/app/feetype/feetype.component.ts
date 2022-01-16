import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feetype',
  templateUrl: './feetype.component.html',
  styleUrls: ['./feetype.component.css']
})
export class FeetypeComponent implements OnInit {
  element: any;

  constructor() { }

  ngOnInit(): void {
  }
  role=[]
  submit()
  {
 this.element=document.getElementsByClassName('fee_form')
 const list={
  list:this.element.form.feetype.value,
  remark:this.element.form.remarks.value
 }
 
 console.log(list)
 
 
  }

  

}
