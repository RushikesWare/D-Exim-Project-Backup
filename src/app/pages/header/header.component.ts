import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { Router } from '@angular/router';
import { ActiveCategoryURL } from 'src/app/shared/AllURL';
import { CategoryMaster } from 'src/app/shared/AllModel';
declare var $ : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList = Array<CategoryMaster>();

  constructor(  private httpService: HttpmethodsService, private router : Router) { }


  ngOnInit(): void {

      $(".show-hide").click(function(){
        $("#sub-menu").hide();
      });


    $(document).ready(function(){
      $(".mega-menu").hover(function(){
        $("#sub-menu").show();
        });
    });

    $(document).ready(function(){
      $("#hide").click(function(){
        $("#sub-men").hide();
      });
      $("#show").click(function(){
        $("p").show();
      });
    });
    this.GetActiveCategory();

  }

  GetActiveCategory(){
    this.httpService.getRequest(ActiveCategoryURL).subscribe((data : any) => {
      this.categoryList = data.result;
     
    })
  }
  GetProdByCatId(cat){
    sessionStorage.setItem("ShowList", "ProductsByCat");
    
    sessionStorage.setItem("categoryId", cat.categoryId);
    // alert(JSON.stringify(cat.categoryId))

    this.router.navigateByUrl("/pages/allProduct");
  }

}