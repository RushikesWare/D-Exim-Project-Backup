import { Component, OnInit } from '@angular/core';
import Drift from 'drift-zoom';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { ActiveProdListURL, ActiveCategoryURL, ProductByCatIdURL } from 'src/app/shared/AllURL';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})

export class AllProductComponent implements OnInit {

  getAllCommonList : any[];
  pageStatus : string;
  shortDesc : any[] = [];
shortDesc1 : any[] = [];
showCat : boolean = false;
showProd : boolean = false;
  constructor(  private httpService: HttpmethodsService, public toastr: ToastrManager, private router : Router) { }
 
  ngOnInit() {
    // alert()
    // new Drift(document.querySelector('.drift-demo-trigger'), {
    //   paneContainer: document.querySelector('.details'),
    //   inlinePane: 769,
    //   inlineOffsetY: -85,
    //   containInline: true,
    //   hoverBoundingBox: true
    // });
    this.pageStatus= String(sessionStorage.getItem("ShowList"));
    // alert(JSON.stringify(sessionStorage.getItem("categoryId")))
    this.GetAllCategoryAndProducts();
  }

  GetAllCategoryAndProducts(){
    if(this.pageStatus === 'Products'){
      // alert("prod")
      this.httpService.getRequest(ActiveProdListURL).subscribe((data : any) => {
        if(data.result != null){
          this.getAllCommonList = data.result;
          this.showProd = true;
          this.showCat = false;
          for(let i = 0; i <= this.getAllCommonList.length; i++)
          {
            this.shortDesc[i] = this.getAllCommonList[i].descriptions.slice(0,30);
            this.shortDesc1[i] = this.getAllCommonList[i].descriptions.slice(0,80);
    
          }
        }
        else{
          this.toastr.errorToastr("Oops.. No Product in this Category.", "Error");

        }
      })
    }
    else if(this.pageStatus === 'Category')
    {
      // alert("Cat")
      this.httpService.getRequest(ActiveCategoryURL).subscribe((data : any) => {
        if(data.result != null){
          this.getAllCommonList = data.result;
          this.showProd = false;
          this.showCat = true;
        }
        else{
          this.toastr.errorToastr("Oops.. No Product in this Category.", "Error");

        }
      })
    }
    else if(this.pageStatus === 'ProductsByCat'){
      // alert("cat Works")
      this.httpService.getRequest(ProductByCatIdURL + "/" + sessionStorage.getItem("categoryId")).subscribe((data : any) => {
        if(data.result != null){
          
        this.getAllCommonList = data.result;
        this.showProd = true;
          this.showCat = false;
          for(let i = 0; i <= this.getAllCommonList.length; i++)
          {
            this.shortDesc[i] = this.getAllCommonList[i].descriptions.slice(0,30);
            this.shortDesc1[i] = this.getAllCommonList[i].descriptions.slice(0,80);
    
          }
        }
        else{
          this.toastr.errorToastr("Oops.. No Product in this Category.", "Error");
        }
        
      })
    }
    
  }

  GetProductById(item){
    // alert(item.productId)
    if(item.productId != null){
      sessionStorage.setItem("productId", item.productId);
    this.router.navigateByUrl("/pages/viewproduct");
    }
    else{
      
    }
    
  }
}
