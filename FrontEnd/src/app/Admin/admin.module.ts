import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';
const adminRouter:Routes=[
  {path:'',component:AdminComponent}
]

@NgModule({
  declarations: [

  
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouter)
  ]
})
export class AdminModule { }
