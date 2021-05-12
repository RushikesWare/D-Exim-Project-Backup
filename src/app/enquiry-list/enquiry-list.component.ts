import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { HttpmethodsService } from '../shared/httpmethods.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SendEmail } from '../shared/AllModel';
import { GetAllMarquee, AllSendEmailURL, SendEmailURL } from '../shared/AllURL';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {
  errormsg: string;
  errormsgDiv: boolean = false;
  exportButton: boolean = false;
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }
  displayedColumns: string[] = ['no', 'name', 'email', 'mobile', 'message' ];
  dataSource = new MatTableDataSource<SendEmail>();

  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;

  ngOnInit() {
    this.getAllEnquiry();
  }


  getAllEnquiry() {
    this.httpService.getRequest(SendEmailURL).subscribe((data: any) => {
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

  exportToExcel(){}

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
