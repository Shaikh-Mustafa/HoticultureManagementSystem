import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './Admin/admin.module';
import { AboutComponent } from './Public/Components/about/about.component';
import { CategoryComponent } from './Public/Components/category/category.component';
import { ContactUsComponent } from './Public/Components/contact-us/contact-us.component';
import { GalleryComponent } from './Public/Components/gallery/gallery.component';
import { HomeComponent } from './Public/Components/home/home.component';
import { LoginComponent } from './Public/Components/login/login.component';
import { ProductDetailsMainPageComponent } from './Public/Components/Product-Detail/product-details-main-page/product-details-main-page.component';
import { RegisterComponent } from './Public/Components/register/register.component';
import { PublicComponent } from './Public/public.component';



@NgModule({
  imports: [    
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
