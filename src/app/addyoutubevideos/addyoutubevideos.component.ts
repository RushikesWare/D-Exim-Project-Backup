import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { HttpmethodsService } from '../shared/httpmethods.service';
import { testUrl, YoutubeURL } from '../shared/AllURL';
import { Youtube } from '../shared/AllModel';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-addyoutubevideos',
  templateUrl: './addyoutubevideos.component.html',
  styleUrls: ['./addyoutubevideos.component.css']
})
export class AddyoutubevideosComponent implements OnInit {

  videoForm: FormGroup;
  testModel = new Text();
  youtubeModel = new Youtube();

  isEdit: boolean = true;
  fileToUpload: File = null;
  errormsg: string;
  errormsgDiv: boolean = false;
  exportButton: boolean = false;

  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }

  displayedColumns: string[] = ['no', 'countryname', 'statename', 'status', 'Action'];
  dataSource = new MatTableDataSource<Youtube>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required]),
      status: new FormControl('', Validators.required),
      // myTest: new FormControl('', Validators.required)
    })
    this.getAllYoutubeLinks();

    // this.httpService.getRequest("/myTest/editTest/9").subscribe((data : any)=> {
    //   alert(JSON.stringify(data))
    //   this.testModel = data;
    // })
  }
  onSubmit() { }
  getByPageId() { }
  get() { }

  exportToExcel(){}
  AddYoutubeLink() {
    // alert(JSON.stringify(this.youtubeModel))
    if (this.isEdit) {
      this.httpService.postRequest(YoutubeURL, this.youtubeModel).subscribe((data: any) => {
        if (data) {
          this.toastr.successToastr("Data Save Successfully.", "Success");
          this.youtubeModel = new Youtube();

          this.isEdit = true;
          this.getAllYoutubeLinks();
        }
        else {
          this.toastr.errorToastr("Something Went Wrong", "Error");
          this.getAllYoutubeLinks();
          this.isEdit = true;
        }
      })
    }
    else {
      this.httpService.putRequest(YoutubeURL, this.youtubeModel).subscribe((data: any) => {
        if (data) {
          this.toastr.successToastr("Data Save Successfully.", "Success");
          this.youtubeModel = new Youtube();
          this.isEdit = true;
          this.getAllYoutubeLinks();
        }
        else {
          this.toastr.errorToastr("Something Went Wrong", "Error");
          this.getAllYoutubeLinks();
          this.isEdit = true;
        }
      })
    }
  }

  getAllYoutubeLinks() {
    this.httpService.getRequest(YoutubeURL).subscribe((data: any) => {
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

  getLinkById(youtubeLinkId)
  {
    this.httpService.getRequest(YoutubeURL + "/" + youtubeLinkId).subscribe((data : any) => {
      this.youtubeModel = data.result;
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
