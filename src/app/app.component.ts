import { Component } from '@angular/core';
import { GototopServiceService } from './shared/gototop-service.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminDashboardUI';
  constructor(  private scrollTopService: GototopServiceService ){} 
 
  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
