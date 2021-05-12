import { Component, OnInit } from '@angular/core';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { GetMarqueeByType, ActiveProdListURL, ActiveCategoryURL, RandomProductURL } from 'src/app/shared/AllURL';
import { News, Product, CategoryMaster } from 'src/app/shared/AllModel';
import { Router } from '@angular/router';
declare var $ :any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  marqueeList = Array<News>();
  marqueeModel = new News();
  productList : any[] = [];
  categoryList = Array<CategoryMaster>();
  constructor(  private httpService: HttpmethodsService, private router : Router) { }


  ngOnInit(): void {

    $('.owl-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      loop: true,
      margin: 50,
      responsiveClass: true,
      nav: true,
      stagePadding: 100,
      responsive: {
        0: {
          items: 1
        },
        568: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
    $(document).ready(function() {
      $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
      });
    });
    $('.item').magnificPopup({
      delegate: 'a',
    });    
    this.GetMarqueeType();
    this.GetActiveProductList();
    this.GetActiveCategory();
  }

  GetMarqueeType()
  {
    this.httpService.getRequest(GetMarqueeByType + "/Marchant Export Page").subscribe((data : any) => {
      // this.httpService.getRequest("/marquee/12").subscribe((data : any) => {
      this.marqueeModel = data.result;
      // alert(JSON.stringify(this.marqueeModel))
    })
  }
shortDesc : any[] = [];
shortDesc1 : any[] = [];

  GetActiveProductList(){

    // RandomProductURL   ActiveProdListURL
    this.httpService.getRequest(RandomProductURL).subscribe((data : any) => {
      this.productList = data.result;
      for(let i = 0; i <= this.productList.length; i++)
      {
        this.shortDesc[i] = this.productList[i].descriptions.slice(0,30);
        this.shortDesc1[i] = this.productList[i].descriptions.slice(0,80);

      }
      // alert(JSON.stringify(this.productList))
    })
  }
  
  GetActiveCategory(){
    this.httpService.getRequest(ActiveCategoryURL).subscribe((data : any) => {
      this.categoryList = data.result;
     
    })
  }

  ViewCategory(){
    sessionStorage.setItem("ShowList", "Category");
    this.router.navigateByUrl("/pages/allProduct");
  }

  ViewAllProducts(){
    sessionStorage.setItem("ShowList", "Products");
    this.router.navigateByUrl("/pages/allProduct");
  }

  GetProductById(products){
    // alert(products.productId)
    sessionStorage.setItem("productId", products.productId);
    this.router.navigateByUrl("/pages/viewproduct");
  }

  GetProdByCatId(cat){
    sessionStorage.setItem("ShowList", "ProductsByCat");
    
    sessionStorage.setItem("categoryId", cat.categoryId);
    // alert(JSON.stringify(cat.categoryId))

    this.router.navigateByUrl("/pages/allProduct");
  }

}
