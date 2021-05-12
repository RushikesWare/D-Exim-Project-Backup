import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  sideBarOpen=true;
  constructor(private router : Router) { }
 

  ngOnInit() {
    if(sessionStorage.getItem("userId") == null){
      this.router.navigateByUrl("/auth/login");
    }
  }

  sideBarToggler($event)
  {
    this.sideBarOpen= !this.sideBarOpen;
  }


}
