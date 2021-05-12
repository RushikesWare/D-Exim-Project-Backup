import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';

import {ExportConsultancyComponent} from './export-consultancy/export-consultancy.component';
import {OperationComponent} from './operation/operation.component';
import {OtherServicesComponent} from './other-services/other-services.component';
import {PostShipmentComponent} from './post-shipment/post-shipment.component';
import {PreShipmentComponent} from './pre-shipment/pre-shipment.component';
import {RegistrationComponent} from './registration/registration.component';
import {TypeOfExportHandleingComponent} from './type-of-export-handleing/type-of-export-handleing.component';
import { AllProductComponent} from './all-product/all-product.component';
import { BrandBuildingComponent} from './brand-building/brand-building.component';
import { MarketLeadershipProductsComponent} from './market-leadership-products/market-leadership-products.component';
import { TradeMarchantExportersComponent} from './trade-marchant-exporters/trade-marchant-exporters.component';
import { VFXAnimationComponent} from './vfx-animation/vfx-animation.component';
import { OtherSupportiveServicesComponent} from './other-supportive-services/other-supportive-services.component';
import { AuditOfCooperativeComponent} from './audit-of-cooperative/audit-of-cooperative.component'
import { CompanyRegistrationComponent} from './company-registration/company-registration.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


const routes: Routes = [
  {
    path:'',component:PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'Gallary', component: ProjectComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'Merchant-Export', component: BlogComponent },
      { path: 'contact', component: ContactComponent },

      { path: 'Strategy-Formulator', component: ExportConsultancyComponent },
      { path: 'Import-Export-Consultants', component: OperationComponent },
      { path: 'Manage-Franchises', component: OtherServicesComponent },
      { path: 'Business-Advisor', component: PostShipmentComponent },
      { path: 'Import-Export-Service', component: PreShipmentComponent },
      { path: 'Distributor', component: RegistrationComponent },
      { path: 'Co-Ordination-with-Authorities', component: TypeOfExportHandleingComponent },
      { path: 'Brand-Building', component: BrandBuildingComponent },
      { path: 'Market-Leadership-Products', component: MarketLeadershipProductsComponent },
      { path: 'Trade-Marchant-Exporters', component: TradeMarchantExportersComponent },
      { path: 'VFX-Animation', component: VFXAnimationComponent },
      { path: 'Other-Supportive-Services', component: OtherSupportiveServicesComponent },
      { path: 'Audit-Of-Cooperative-Socity', component: AuditOfCooperativeComponent },
      { path: 'Company-Registration', component: CompanyRegistrationComponent },

      { path: 'viewproduct', component: ViewproductComponent},

      { path: 'allProduct', component: AllProductComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
