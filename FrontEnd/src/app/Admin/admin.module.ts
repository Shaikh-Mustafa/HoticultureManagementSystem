import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './admin/Components/dashboard/dashboard.component';
import { ProductsComponent } from './admin/Components/products/products.component';
import { SalesComponent } from './admin/Components/sales/sales.component';
import { CustomersComponent } from './admin/Components/customers/customers.component';
import { ComplaintsComponent } from './admin/Components/complaints/complaints.component';
import { FAQComponent } from './admin/Components/faq/faq.component';
import { SettingsComponent } from './admin/Components/settings/settings.component';
const adminRouter:Routes=[
  {path:'',component:AdminComponent}
]

@NgModule({
  declarations: [  
    NavigationComponent, DashboardComponent, ProductsComponent, SalesComponent, CustomersComponent, ComplaintsComponent, FAQComponent, SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouter)
  ]
})
export class AdminModule { }
