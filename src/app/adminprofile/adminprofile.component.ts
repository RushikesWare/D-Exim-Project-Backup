import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { HttpmethodsService } from '../shared/httpmethods.service';
import { GetUserByIdURL, UserUpdateURL } from '../shared/AllURL';
import { Login, UserProfile } from '../shared/AllModel';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  adminProfileForm: FormGroup;
  hide = true;
  url = '';

  userProfileModel = new UserProfile();
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }


  ngOnInit() {
    this.adminProfileForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"), Validators.maxLength(20), Validators.minLength(1)]),
      // middleName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"), Validators.maxLength(20), Validators.minLength(1)]),
      // lastName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"), Validators.maxLength(20), Validators.minLength(1)]),
      email: new FormControl('', [Validators.required,]),
      mobileNo: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
// alert(JSON.stringify(sessionStorage.getItem("userID")))

this.GetUserDataById();
  }
GetUserDataById(){
  this.httpService.getRequest(GetUserByIdURL + "/" + sessionStorage.getItem("userId")).subscribe((data : any) => {
    this.userProfileModel = data.result;
    // alert(JSON.stringify(this.userProfileModel))
  })


}

SaveProfile(){
  this.httpService.putRequest(UserUpdateURL, this.userProfileModel).subscribe((data : any) => {
    // if(data.strStatusCode != 200)
    // {
    //   this.toastr.errorToastr(data.message, "Error");

    // }
    // else{
      this.toastr.successToastr(data.message);
      this.router.navigateByUrl("/layout");

    // }
  })
}

  onSubmit() { 
  
  }
  onFilesAdded(){

  }

}
