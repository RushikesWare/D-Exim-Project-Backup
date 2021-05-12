import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { HttpmethodsService } from '../httpmethods.service';
import { GetUserByIdURL } from '../AllURL';
import { UserProfile } from '../AllModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userProfileModel = new UserProfile();

  @Output() toggleSideBarForMe:EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }


ngOnInit() {

  // alert(JSON.stringify(sessionStorage.getItem("userId")))
}
toggleSideBar(){
this.toggleSideBarForMe.emit();
}

GetUserDetails(){
  this.httpService.getRequest(GetUserByIdURL + "/" + sessionStorage.getItem("userId")).subscribe((data : any) => {
    this.userProfileModel = data.result;
    // alert(JSON.stringify(this.userProfileModel))
  })
}


logout()
{
  sessionStorage.clear();
  this.router.navigateByUrl("/auth/login");
}
}
