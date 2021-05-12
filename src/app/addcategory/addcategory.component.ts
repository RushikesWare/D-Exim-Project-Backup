import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { CategoryMaster } from '../shared/AllModel';
import { HttpmethodsService } from '../shared/httpmethods.service';
import { fileUpload, AddCategoryURL, GetAllCategoryURL, GetByIdCategoryURL, UpdateCategoryURL } from '../shared/AllURL';
import { GototopServiceService } from '../shared/gototop-service.service';



@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {


  countryname: string;
  no: number;
  statename: number;
  status: string;
  disabled: true;
  checked: true;
  categoryForm: FormGroup;

  categoryModel = new CategoryMaster();
  isEdit: boolean = true;
  fileToUpload: File = null;
  errormsg: string;
  errormsgDiv: boolean = false;
  exportButton: boolean = false;


  // constructor( private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router) { }

  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService, private scrollTopService: GototopServiceService) { }


  displayedColumns: string[] = ['no', 'countryname', 'statename', 'desc', 'status', 'Action'];
  dataSource = new MatTableDataSource<CategoryMaster>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  ngOnInit() {

    this.categoryForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      photoLink: new FormControl('', [Validators.required]),
      descriptions: new FormControl('', [Validators.required])
    })
    this.getAllCategory();
  }


  addCategory() {
    if (this.isEdit) {
      if (this.categoryModel.name != null || this.categoryModel.descriptions != null || this.categoryModel.photoLink != null || this.categoryModel.status != null) {
        this.httpService.postRequest(AddCategoryURL, this.categoryModel).subscribe((data: any) => {
          if (data) {
            this.toastr.successToastr("Data Save Successfully.", "Success");
            this.categoryModel = new CategoryMaster();
            this.isEdit = true;
            this.getAllCategory();
          }
          else {
            this.toastr.errorToastr("Something Went Wrong", "Error");
            this.getAllCategory();
            this.isEdit = true;
          }
        })
      }
      else {
        this.toastr.errorToastr("Please Enter All Details..");
      }
    }
    else {
      if (this.categoryModel.name != null || this.categoryModel.descriptions != null || this.categoryModel.photoLink != null || this.categoryModel.status != null) {

        this.httpService.putRequest(UpdateCategoryURL, this.categoryModel).subscribe((data: any) => {
          if (data) {
            this.toastr.successToastr("Data Save Successfully.", "Success");
            this.categoryModel = new CategoryMaster();
            this.isEdit = true;
            this.getAllCategory();
          }
          else {
            this.toastr.errorToastr("Something Went Wrong", "Error");
            this.getAllCategory();
            this.isEdit = true;
          }
        })
      }
      else {
        this.toastr.errorToastr("Please Enter All Details..");
      }
    }
  }

 
  exportToExcel() { }

  handleFileInput(File: FileList) {
    this.fileToUpload = File.item(0);
    this.httpService.fileUpload(fileUpload, this.fileToUpload).subscribe((
      data: any) => {
      if (data.status == true) {
        this.categoryModel.photoLink = data.path;
      }
      else {
        this.toastr.errorToastr(data.path, 'error!', { timeout: 500 });
      }
    })
  }

  getAllCategory() {
    this.httpService.getRequest(GetAllCategoryURL).subscribe((data: any) => {
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

  GetByIdCategory(categoryId) {
    this.httpService.getRequest(GetByIdCategoryURL + "/" + categoryId).subscribe((data: any) => {
      this.categoryModel = data.result;
      this.isEdit = false;
      this.scrollTopService.setScrollTop();
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
