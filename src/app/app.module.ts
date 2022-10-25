import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/buttons/secondary-button/secondary-button.component';
import { IconOnlyButtonComponent } from './components/buttons/icon-only-button/icon-only-button.component';
import { TextButtonComponent } from './components/buttons/text-button/text-button.component';
import { InputFieldComponent } from './components/inputs/input-field/input-field.component';
import { AddToCartInputFieldComponent } from './components/inputs/add-to-cart-input-field/add-to-cart-input-field.component';
import { ProductTileTopComponent } from './components/product-tile/product-tile-top/product-tile-top.component';
import { ProductTileMidComponent } from './components/product-tile/product-tile-mid/product-tile-mid.component';
import { ProductTileBottomComponent } from './components/product-tile/product-tile-bottom/product-tile-bottom.component';
import { SaleComponent } from './components/badges/sale/sale.component';
import { SoldOutComponent } from './components/badges/sold-out/sold-out.component';
import { NewComponent } from './components/badges/new/new.component';
import { ProductOfTheWeekComponent } from './components/badges/product-of-the-week/product-of-the-week.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SpinnerComponent } from './components/inputs/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AlcoholInputFieldComponent } from './components/inputs/alcohol-input-field/alcohol-input-field.component';

@NgModule({
  declarations: [
    AppComponent,
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
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    IconOnlyButtonComponent,
    TextButtonComponent,
    InputFieldComponent,
    AddToCartInputFieldComponent,
    ProductTileTopComponent,
    ProductTileMidComponent,
    ProductTileBottomComponent,
    SaleComponent,
    SoldOutComponent,
    NewComponent,
    ProductOfTheWeekComponent,
    FilterSidebarComponent,
    CheckboxComponent,
    SpinnerComponent,
    BreadcrumbsComponent,
    AlcoholInputFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
