import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule, MatDialogModule, MatIconModule, MatDividerModule, MatListModule, MatToolbarModule, MatMenuModule, MatCardModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PagingComponent } from './paging/paging.component';
import { ToastrModule } from 'ng6-toastr-notifications';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, PagingComponent ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ToastrModule.forRoot(),

    MatButtonModule, MatDialogModule,MatIconModule,MatDividerModule,MatListModule,MatToolbarModule,MatSidenavModule,
    MatMenuModule,MatCardModule
  ],
  exports:[
    HeaderComponent,FooterComponent, SidebarComponent,PagingComponent 
  ]
})
export class SharedModule { }
