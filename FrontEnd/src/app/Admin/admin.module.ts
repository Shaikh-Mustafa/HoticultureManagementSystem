import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
const adminRouter:Routes=[
  // {path:'',component:AdminComponent}
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouter)
  ]
})
export class AdminModule { }
