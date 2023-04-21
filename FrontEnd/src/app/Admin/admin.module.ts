import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './admin/Components/dashboard/dashboard.component';
import { ProductsComponent } from './admin/Components/products/products.component';
import { SalesComponent } from './admin/Components/sales/sales.component';
import { CustomersComponent } from './admin/Components/customers/customers.component';
import { ComplaintsComponent } from './admin/Components/complaints/complaints.component';
import { FAQComponent } from './admin/Components/faq/faq.component';
import { SettingsComponent } from './admin/Components/settings/settings.component';
import { DataTablesModule } from 'angular-datatables';
import { StockComponent } from './admin/Components/stock/stock.component';
import { AddProductComponent } from './admin/Components/add-product/add-product.component';
import { AddStockComponent } from './admin/Components/add-stock/add-stock.component';
import { ReactiveFormsModule } from '@angular/forms';
const adminRouter: Routes = [
  { path: 'admin', component: AdminComponent, 
children : [
  {path:'dashboard',component: DashboardComponent},
  {path:'products',component: ProductsComponent},
  {path:'stock',component: StockComponent},
  {path:'sales',component: SalesComponent},
  {path:'customers',component: CustomersComponent},
  {path:'complaints',component: ComplaintsComponent},
  {path:'Settings',component: SettingsComponent},
  {path:'faq',component: FAQComponent},
  {path:'add-product',component: AddProductComponent},
  {path:'add-stock',component: AddStockComponent},
]}
]

@NgModule({
  declarations: [
    AdminComponent,
    NavigationComponent, 
    DashboardComponent,
     ProductsComponent,
      SalesComponent,
       CustomersComponent,
        ComplaintsComponent,
         FAQComponent,
          SettingsComponent,
          StockComponent,
          AddProductComponent,
          AddStockComponent,
          AddProductComponent,
          AddStockComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRouter)
  ],
 
})
export class AdminModule { }
