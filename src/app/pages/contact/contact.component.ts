import { Component, OnInit } from '@angular/core';
import { SendEmail } from 'src/app/shared/AllModel';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { SendEmailURL } from 'src/app/shared/AllURL';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sendEmailModel = new SendEmail();

  constructor(private httpService: HttpmethodsService, public toastr: ToastrManager) { }


  ngOnInit(): void {
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
