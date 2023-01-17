import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeProductCategoriesComponent } from './Public/Components/home/home-product-categories/home-product-categories.component';
import { HomeProductTileComponent } from './Public/Components/home/home-product-tile/home-product-tile.component';
import { ProductDetailImageComponent } from './Public/Components/Product-Detail/product-detail-image/product-detail-image.component';
import { ProductDetailsTileComponent } from './Public/Components/Product-Detail/product-details-tile/product-details-tile.component';
import { ProductDetailsMainPageComponent } from './Public/Components/Product-Detail/product-details-main-page/product-details-main-page.component';
import { AdminModule } from './Admin/admin.module';
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
    HomeProductCategoriesComponent,
    HomeProductTileComponent,
    ProductDetailImageComponent,
    ProductDetailsTileComponent,
    ProductDetailsMainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxImageZoomModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
