import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SellerAccountComponent } from './components/seller-account/seller-account.component';
import { LoginComponent } from './components/login/login.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OnshippingComponent } from './components/onshipping/onshipping.component';
<<<<<<< HEAD
import { AddressComponent } from './components/address/address.component';
import { AddProductComponent } from './components/add-product/add-product.component';
=======
import { authGuard } from './auth.guard';
>>>>>>> 21b19d1a02d3741b38953998389c5d85e1c4495b
export const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {path: 'home', component:HomeComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },

  {
    path: '',
    component: BlankLayoutComponent,
    children: [
<<<<<<< HEAD
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'seller-account', component: SellerAccountComponent },
      { path:'favourites', component: FavouritesComponent},
      {path:'cart', component:CartComponent},
      {path:'viewdetails', component:ViewdetailsComponent},
      {path:'checkout', component:CheckoutComponent},
      {path:'onshipping', component:OnshippingComponent},
      {path:'address', component:AddressComponent},
      {path:'add-product', component:AddProductComponent},
=======
      { path: 'seller-account', canActivate:[authGuard], component: SellerAccountComponent },
      { path:'favourites', canActivate:[authGuard], component: FavouritesComponent},
      {path:'cart', canActivate:[authGuard], component:CartComponent},
      {path:'viewdetails/:id', canActivate:[authGuard], component:ViewdetailsComponent},
      {path:'checkout', canActivate:[authGuard], component:CheckoutComponent},
      {path:'onshipping', canActivate:[authGuard], component:OnshippingComponent},
>>>>>>> 21b19d1a02d3741b38953998389c5d85e1c4495b
    ],
  },

];
