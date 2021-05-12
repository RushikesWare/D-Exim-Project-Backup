import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { News } from '../shared/AllModel';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { HttpmethodsService } from '../shared/httpmethods.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AddCategoryURL, UpdateCategoryURL, fileUpload, GetAllCategoryURL, GetByIdCategoryURL, AddMarquee, UpdateMarquee, GetAllMarquee, GetByIdMarquee } from '../shared/AllURL';


@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})

export class AddnewsComponent implements OnInit {

  newsForm: FormGroup;
  categoryActiveList: any[];
  isEdit: boolean = true;
  fileToUpload: File = null;
  errormsg: string;
  errormsgDiv: boolean = false;
  exportButton: boolean = false;
  newsModel = new News();
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }
  displayedColumns: string[] = ['no', 'countryname', 'desc', 'status', 'Action'];
  dataSource = new MatTableDataSource<News>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  ngOnInit() {
    this.newsForm = this.formBuilder.group({
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      type: new FormControl('', Validators.required),
      // newsStatus: new FormControl('', Validators.required)
    })
    this.getAllMarquee();
    
  }
 

  addNews() {
    // if(this.isEdit){
      this.httpService.putRequest(AddMarquee, this.newsModel).subscribe((data: any) => {
        if (data) {
          this.toastr.successToastr("Data Save Successfully.", "Success");
          this.newsModel = new News();
          this.isEdit = true;
          this.getAllMarquee();  
        }
        else {
          this.toastr.errorToastr("Something Went Wrong", "Error");
          this.getAllMarquee();
          this.isEdit = true;
        }
      })
    // }
    // else{
    //   this.httpService.putRequest(UpdateMarquee, this.newsModel).subscribe((data: any) => {
    //     if (data) {
    //       this.toastr.successToastr("Data Save Successfully.", "Success");
    //       this.newsModel = new News();
    //       this.isEdit = true;
    //       this.getAllMarquee();  
    //     }
    //     else {
    //       this.toastr.errorToastr("Something Went Wrong", "Error");
    //       this.getAllMarquee();
    //       this.isEdit = true;
    //     }
    //   })
    // }    
  }

   
  exportToExcel() { }
 
  getAllMarquee() {
    this.httpService.getRequest(GetAllMarquee).subscribe((data: any) => {
      if (data.length != 0) {
        this.dataSource = new MatTableDataSource(data.result);
        this.dataSource.paginator = this.paginator;
        this.errormsgDiv = false;
        this.exportButton = true;
        setTimeout(() => {
          this.dataSource.sort = this.sort;
        })
      }
      else {
        this.errormsg = "No Records Found";
        this.errormsgDiv = true;
        this.dataSource = null;
        this.exportButton = false;
      }
    })
  }

  GetByIdMarquee(marqueeId) {
    this.httpService.getRequest(GetByIdMarquee + "/" + marqueeId).subscribe((data: any) => {
      this.newsModel = data.result;
      this.isEdit = false; 
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
