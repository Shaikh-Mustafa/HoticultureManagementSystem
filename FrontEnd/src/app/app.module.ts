import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Public/Components/home/home.component';
import { NavigationComponent } from './Public/Components/navigation/navigation.component';
import { AboutComponent } from './Public/Components/about/about.component';
import { ContactUsComponent } from './Public/Components/contact-us/contact-us.component';
import { OurFarmsComponent } from './Public/Components/our-farms/our-farms.component';
import { GalleryComponent } from './Public/Components/gallery/gallery.component';
import { CategoryComponent } from './Public/Components/category/category.component';
import { PublicComponent } from './Public/public.component';
import { FooterComponent } from './Public/Components/footer/footer.component';
import { CountUpDirective } from './count-up.directive';
import { LoginComponent } from './Public/Components/login/login.component';
import { RegisterComponent } from './Public/Components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    OurFarmsComponent,
    GalleryComponent,
    CategoryComponent,
    FooterComponent,
    CountUpDirective,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
