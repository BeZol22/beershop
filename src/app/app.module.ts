import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AllBeersComponent } from './pages/all-beers/all-beers.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { BeerGiftsComponent } from './pages/beer-gifts/beer-gifts.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { UserBarComponent } from './components/user-bar/user-bar.component';
import { PagesBarComponent } from './components/pages-bar/pages-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    AllBeersComponent,
    NavigationBarComponent,
    ProductTileComponent,
    PackagesComponent,
    BeerGiftsComponent,
    SearchBarComponent,
    HeaderComponent,
    UserBarComponent,
    PagesBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
