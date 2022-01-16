import { Component, OnInit } from '@angular/core';
import { LicenseeService } from '../licensee.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(public lcn:LicenseeService) { }

  ngOnInit(): void {
  }

}
