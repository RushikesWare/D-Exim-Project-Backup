import { Component, OnInit } from '@angular/core';
import { News, SendEmail } from 'src/app/shared/AllModel';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { GetMarqueeByType, SendEmailURL } from 'src/app/shared/AllURL';
import { ToastrManager } from 'ng6-toastr-notifications';
declare var w3: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {


  // marqueeList = Array<News>();
  marqueeModel = new News();

  sendEmailModel = new SendEmail();
  constructor(private httpService: HttpmethodsService, private toastr : ToastrManager) { }

  ngOnInit(): void {
    w3.slideshow(".nature", 5000);
    this.GetMarqueeType();  
  }


  GetMarqueeType() {
    this.httpService.getRequest(GetMarqueeByType + "/Home Page").subscribe((data: any) => {
      // this.httpService.getRequest("/marquee/12").subscribe((data : any) => {
      this.marqueeModel = data.result;
      // alert(JSON.stringify(this.marqueeModel))
    })
  }

  SendEmail() {
    // alert(JSON.stringify(this.sendEmailModel))
    this.httpService.postRequest(SendEmailURL, this.sendEmailModel).subscribe((data: any) => {
      this.sendEmailModel = new SendEmail();
      this.toastr.successToastr("Mail Sent Successfully.");
      this.sendEmailModel.name = this.sendEmailModel.mobileNo = this.sendEmailModel.message = this.sendEmailModel.email = "";
    })
  }
}

