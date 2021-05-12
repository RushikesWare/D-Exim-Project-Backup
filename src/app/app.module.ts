import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatAutocompleteModule, MatSlideToggleModule, MatDatepickerModule, MatProgressSpinnerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatLabel, MatTableModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatIconModule, MatDividerModule, MatListModule, MatToolbarModule, MatMenuModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import * as $ from 'jquery';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { AddyoutubevideosComponent } from './addyoutubevideos/addyoutubevideos.component';
import { AddimagesComponent } from './addimages/addimages.component'; 
import { GototopServiceService } from './shared/gototop-service.service';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    AdminprofileComponent,
    AddproductsComponent,
    AddcategoryComponent,
    AddnewsComponent,
    AddyoutubevideosComponent,
    AddimagesComponent,
    EnquiryListComponent ,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDialogModule,MatIconModule,MatDividerModule,MatListModule,MatToolbarModule,
    MatMenuModule,MatCardModule, MatPaginatorModule,
    CommonModule,
    RouterModule, 
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule, 
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatPaginatorModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    // PagesModule
  ],
  providers: [DatePipe, GototopServiceService],
  exports: [
    MatButtonModule, MatDialogModule, MatIconModule],
    
  bootstrap: [AppComponent],
  entryComponents: [],

})
export class AppModule { }
