

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { AddImageURL, YoutubeURL } from 'src/app/shared/AllURL';
import { ImageGallery, Youtube } from 'src/app/shared/AllModel';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { stringify } from '@angular/compiler/src/util';

declare var $:any;


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  safeSrc: SafeResourceUrl;
  thumbnail : any;
  imageList =  Array<ImageGallery>();
  videoList =  Array<Youtube>();

  constructor(private formBuilder: FormBuilder, public toastr: ToastrManager, private router: Router, private httpService: HttpmethodsService, private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
   }


  ngOnInit(): void {
    this.GetAllImages();

    $(document).ready(function(){
      // filter
      $('nav a').on('click', function(event){
          event.preventDefault();
          // current class
          $('nav li.current').removeClass('current');
          $(this).parent().addClass('current');
  
          // set new heading
          $('h1.heading').text($(this).text());
          
          // filter link text
          var category = $(this).text().toLowerCase().replace(' ', '-');
          
          // remove hidden class if "all" is selected
          if(category == 'all-projects'){
              $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
          } else {
              $('ul#gallery li').each(function(){
                 if(!$(this).hasClass(category)){
                     $(this).hide().addClass('hidden');
                 } else {
                     $(this).fadeIn('slow').removeClass('hidden');
                 }
              });
          }
          return false;        
      });
      // lightbox
      $('ul#gallery a').on('click', function(event){
          event.preventDefault();
          var link = $(this).find('img').attr('src');
          $('.gallery img').attr('src', '');
          $('.gallery img').attr('src', link);
          $('.gallery').fadeIn('slow');
      });
      // close lightbox
      $('.gallery').on('click', function(event){
          event.preventDefault();
          $('.gallery').fadeOut('slow');
      });
  });

  $('.without-caption').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

$('.with-caption').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		zoom: {
			enabled: true
		}
	});
 


  
  }

  finalURL:any[]=[];

  GetAllImages(){
    // alert()
    this.httpService.getRequest(AddImageURL).subscribe((data : any) => {
      if (data.length != 0) {
        this.imageList = data.result;
      }
      else {
         
      }
    })


    this.httpService.getRequest(YoutubeURL).subscribe((data :any)=>{
      if (data.length != 0) {
        this.videoList = data.result;
        console.log(this.videoList)
        for(let i=0; i<= this.videoList.length; i++)
        {
      this.finalURL[i]=this.sanitizer.bypassSecurityTrustResourceUrl(this.videoList[i].link);
// alert(JSON.stringify(this.finalURL[i]))
        }
      }
      else {
         
      }
    })
  }
}





