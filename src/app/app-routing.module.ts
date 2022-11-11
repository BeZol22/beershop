import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBeersComponent } from './pages/all-beers/all-beers.component';
import { BeersResolver } from './pages/all-beers/beers.resolver';
import { BeerGiftsComponent } from './pages/beer-gifts/beer-gifts.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-beers', pathMatch: 'full' },
  {
    path: 'all-beers',
    component: AllBeersComponent,
    resolve: { beers: BeersResolver },
  },
  { path: 'all-beers/:id', component: ProductDetailsComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'beer-gifts', component: BeerGiftsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
