import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddimagesComponent } from './addimages/addimages.component';
import { AddyoutubevideosComponent} from './addyoutubevideos/addyoutubevideos.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
 
const routes: Routes = [

  { path: '', pathMatch: "full", redirectTo: '/pages/home' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule) },

  {
    path: 'layout', component: LayoutComponent,
    children: 
    [
      { path: '', component: DashboardComponent },
      { path: 'add-product', component: AddproductsComponent },
      { path: 'admin', component: AdminprofileComponent },
      { path: 'add-news', component: AddnewsComponent },

      { path: 'add-category', component: AddcategoryComponent },
      { path: 'add-images', component: AddimagesComponent },
      { path: 'add-videos', component: AddyoutubevideosComponent },
      { path: 'enquiry-list', component: EnquiryListComponent }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
