import { Component, OnInit } from '@angular/core';
import Drift from 'drift-zoom';
import { Product, CategoryMaster } from 'src/app/shared/AllModel';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { Router } from '@angular/router';
import { ProductURL } from 'src/app/shared/AllURL';
declare var $ :any;

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
productModel = new Product();
  productList = Array<Product>();
  categoryList = Array<CategoryMaster>();
  imgLink: string = "";
  constructor(  private httpService: HttpmethodsService, private router : Router) { }


  ngOnInit() {
    this.ViewProductById();

    new Drift(document.querySelector('.drift-demo-trigger'), {
      paneContainer: document.querySelector('.details'),
      inlinePane: 769,
      inlineOffsetY: -85,
      containInline: true,
      hoverBoundingBox: true
    });
  }

  ViewProductById(){
    this.httpService.getRequest(ProductURL + "/" + sessionStorage.getItem("productId")).subscribe((data : any) => {
      this.productModel = data.result;
      // alert(JSON.stringify(this.productModel))
      this.imgLink = this.productModel.photoLink;
    })
  }
}
