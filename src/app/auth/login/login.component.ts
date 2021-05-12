import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/AllModel';
import { FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { LoginURL } from 'src/app/shared/AllURL';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  user: user = new Object();
  error: any;

  loginModel = new Login();



  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }

  ngOnInit() {
  }


  Login() {

    // alert(JSON.stringify(this.loginModel))
    this.httpService.postRequest(LoginURL, this.loginModel).subscribe((data : any) => {
      if(data.strStatusCode == 200)
      {
        this.router.navigateByUrl("/layout");
        this.toastr.successToastr(data.message, "Success");
        // alert(JSON.stringify(data))
        sessionStorage.setItem("userId", data.userId);
      }
      else
      {
        this.router.navigateByUrl("/auth/login");
        this.toastr.errorToastr(data.message, "Error");
      }
    })
  }

}
