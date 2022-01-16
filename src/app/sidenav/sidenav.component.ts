import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
// fn(){
//   this.router.navigate(['dashboard/account'])
// }
sub(){
  this.router.navigate(['/dashboard/subscription'])
}
event(){
  this.router.navigate(['/dashboard/activities'])
}
user(){
  this.router.navigate(['/dashboard/users'])
}
sprt(){
  this.router.navigate(['/dashboard/support'])
}
home(){
  this.router.navigate(['/dashboard/home'])
}
dashB(){
  this.router.navigate(['/dashboard/front-page'])
}
settings(){
  this.router.navigate(['/dashboard/settings'])
}
account(){
  this.router.navigate(['/dashboard/account'])
}


  isShowing!: boolean;

toggleSidenav() {
   this.isShowing = !this.isShowing;
}

callMethods() {
    this.toggleSidenav();
}

 

}
