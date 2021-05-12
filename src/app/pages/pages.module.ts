import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDatepickerModule, MatSelectModule, MatAutocompleteModule, MatSlideToggleModule, MatProgressSpinnerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatSidenavModule, MatDividerModule, MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { PagesComponent } from './pages.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PreShipmentComponent } from './pre-shipment/pre-shipment.component';
import { OperationComponent } from './operation/operation.component';
import { RegistrationComponent } from './registration/registration.component';
import { ExportConsultancyComponent } from './export-consultancy/export-consultancy.component';
import { PostShipmentComponent } from './post-shipment/post-shipment.component';
import { TypeOfExportHandleingComponent } from './type-of-export-handleing/type-of-export-handleing.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { AllProductComponent } from './all-product/all-product.component';
import { BrandBuildingComponent } from './brand-building/brand-building.component';
import { MarketLeadershipProductsComponent } from './market-leadership-products/market-leadership-products.component';
import { TradeMarchantExportersComponent } from './trade-marchant-exporters/trade-marchant-exporters.component';
import { VFXAnimationComponent } from './vfx-animation/vfx-animation.component';
import { OtherSupportiveServicesComponent } from './other-supportive-services/other-supportive-services.component';
import { AuditOfCooperativeComponent } from './audit-of-cooperative/audit-of-cooperative.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


@NgModule({
  declarations: [
     HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    ProjectComponent,
    BlogComponent,
    ContactComponent,
    ServicesComponent,
    PreShipmentComponent,
    OperationComponent,
    RegistrationComponent,
    ExportConsultancyComponent,
    PostShipmentComponent,
    TypeOfExportHandleingComponent,
    OtherServicesComponent,
    AllProductComponent,
    BrandBuildingComponent,
    MarketLeadershipProductsComponent,
    TradeMarchantExportersComponent,
    VFXAnimationComponent,
    OtherSupportiveServicesComponent,
    AuditOfCooperativeComponent,
    CompanyRegistrationComponent,
    ViewproductComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, 
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatDialogModule, 
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule, 
    // PagesRoutingModule

  ]
})
export class PagesModule { }
