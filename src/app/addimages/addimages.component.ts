import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ImageGallery } from '../shared/AllModel';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { HttpmethodsService } from '../shared/httpmethods.service';
import { AddImageURL, fileUpload, GalleryByIdURL } from '../shared/AllURL';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-addimages',
  templateUrl: './addimages.component.html',
  styleUrls: ['./addimages.component.css']
})
export class AddimagesComponent implements OnInit {

  imageForm: FormGroup;
  imageGalleryModel = new ImageGallery();

  isEdit: boolean = true;
  fileToUpload: File = null;
  errormsg: string;
  errormsgDiv: boolean = false;
  exportButton: boolean = false;


  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }


  displayedColumns: string[] = ['no', 'countryname', 'statename', 'status', 'Action'];
  dataSource = new MatTableDataSource<ImageGallery>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  ngOnInit() {
    this.imageForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      // imageDescription: new FormControl('', [Validators.required]),
      status: new FormControl('', Validators.required),
      link :new FormControl('', Validators.required),
      
    })
    this.getAllNews();

  }

  AddGalleryImage(){
    // alert(JSON.stringify(this.imageGalleryModel))
    if(this.isEdit){
      this.httpService.postRequest(AddImageURL, this.imageGalleryModel).subscribe((data: any) => {
        if (data) {
          this.toastr.successToastr("Data Save Successfully.", "Success");
          this.imageGalleryModel = new ImageGallery();
          this.isEdit = true;
          this.getAllNews();  
        }
        else {
          this.toastr.errorToastr("Something Went Wrong", "Error");
          this.getAllNews();
          this.isEdit = true;
        }
      })
    }
    else{
      this.httpService.putRequest(AddImageURL, this.imageGalleryModel).subscribe((data: any) => {
        if (data) {
          this.toastr.successToastr("Data Save Successfully.", "Success");
          this.imageGalleryModel = new ImageGallery();
          this.isEdit = true;
          this.getAllNews();  
        }
        else {
          this.toastr.errorToastr("Something Went Wrong", "Error");
          this.getAllNews();
          this.isEdit = true;
        }
      })
    } 
  }

  
  handleFileInput(File: FileList) {
    this.fileToUpload = File.item(0);
    this.httpService.fileUpload(fileUpload, this.fileToUpload).subscribe((
      data: any) => {
      if (data.status == true) {
        this.imageGalleryModel.link = data.path;
        // alert(JSON.stringify(this.imageGalleryModel.link))
      }
      else {
        this.toastr.errorToastr(data.path, 'error!', { timeout: 500 });
      }
    })
  }


  onSubmit(){}


  getByNewsId(galleryId){
    this.httpService.getRequest(GalleryByIdURL + "/" + galleryId).subscribe((data : any) => {
      this.imageGalleryModel = data.result;
      this.isEdit = false; 
    })
  }

  getAllNews(){
    this.httpService.getRequest(AddImageURL).subscribe((data : any) => {
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportToExcel(){}

}
