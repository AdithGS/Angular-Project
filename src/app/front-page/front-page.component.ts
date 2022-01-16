import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  cnt:any
 

  constructor(private userCount:MembersService) { }

  ngOnInit(): void {
    this.cnt=this.userCount.len()
  console.log(this.cnt)
  }
  
 

}
