import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';
import { isEmpty } from 'rxjs/operators';
import { Product } from '../shared/AllModel';
import { ProductURL, fileUpload, GetAllCategoryURL } from '../shared/AllURL';
import { Router } from '@angular/router';
import { HttpmethodsService } from '../shared/httpmethods.service';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  exportButton: boolean = false;
  productForm: FormGroup;
  categoryActiveList: any[];
  isEdit: boolean = true;
  fileToUpload: File = null;
  errormsg: string;
  errormsgDiv: boolean = false;
  productModel = new Product();
  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService) { }
  // displayedColumns: string[] = ['no', 'countryname', 'desc', 'status', 'Action'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('epltable', { static: false }) epltable: ElementRef;


  displayedColumns: string[] = ['no', 'category', 'Product', 'desc', 'img', 'status' ,'action'];

  ngOnInit() {

    this.productForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      // Validators.pattern("^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$")
      descriptions: new FormControl('', [Validators.required]),
      photoLink: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      // sizeWiseProductDiscountPercentage: new FormControl('', [Validators.required]),
      // sizeWiseProductFinalAmount: new FormControl('', [Validators.required]),
      // sizeWiseProductStatus: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      // subCategoryId: new FormControl('', Validators.required),
      // sizeId: new FormControl('', Validators.required),
      // unitId: new FormControl('', Validators.required),
      // productImageStatus: new FormControl('', Validators.required),
      // productImagePath: new FormControl('', Validators.required),
      // brandId: new FormControl('', Validators.required),
      // cashBackAmount: new FormControl('', Validators.required)
    })
    this.getAllCategory();
    this.GetAllProducts();
  }

  handleFileInput(File: FileList) {
    this.fileToUpload = File.item(0);
    this.httpService.fileUpload(fileUpload, this.fileToUpload).subscribe((
      data: any) => {
      if (data.status == true) {
        this.productModel.photoLink = data.path;
      }
      else {
        this.toastr.errorToastr(data.path, 'error!', { timeout: 500 });
      }
    })
  }


  
  getAllCategory() {
    this.httpService.getRequest(GetAllCategoryURL).subscribe((data: any) => {
      // alert(JSON.stringify(data.result))
      this.categoryActiveList = data.result;
    })
  }


  addProduct() {
    // alert(JSON.stringify(this.productModel))
    if (this.isEdit) {
      this.httpService.postRequest(ProductURL, this.productModel).subscribe((data: any) => {
        if (data) {
          this.toastr.successToastr("Data Save Successfully.", "Success");
          this.productModel = new Product();
          this.isEdit = true;
          this.GetAllProducts();
        }
        else {
          this.toastr.errorToastr("Something Went Wrong", "Error");
          this.GetAllProducts();
          this.isEdit = true;
        }
      })
    }
    else {
      // alert("update")
      this.httpService.putRequest(ProductURL, this.productModel).subscribe((data: any) => {
        if (data) {
          this.toastr.successToastr("Data Update Successfully.", "Success");
          this.productModel = new Product();
          this.isEdit = true;
          this.GetAllProducts();
        }
        else {
          this.toastr.errorToastr("Something Went Wrong", "Error");
          this.GetAllProducts();
          this.isEdit = true;
        }
      })
    }

  }

  getProductById(productId) {
    this.httpService.getRequest(ProductURL + "/" + productId).subscribe((data : any) => {
      this.productModel = data.result;
      this.isEdit = false;
    })
   }

   
  exportToExcel() { }

  GetAllProducts(){
    this.httpService.getRequest(ProductURL).subscribe((data: any) => {
      // alert(JSON.stringify(data.result))
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

}
