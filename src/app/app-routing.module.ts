import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { authGuard } from './auth/auth.guard';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { PlsLoginComponent } from './pages/pls-login/pls-login.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: DashboardComponent,
          },
        ]
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent,
        canActivate: [authGuard]
      },
    ]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard]
  },
  {
    path: 'order-placed',
    component: OrderPlacedComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginSignupComponent,
  },
  {
    path: 'signup',
    component: LoginSignupComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'pleaselogin',
    component: PlsLoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'myorders',
    component: MyOrdersComponent,
    canActivate: [authGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
