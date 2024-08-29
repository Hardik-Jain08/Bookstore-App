import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { authGuard } from './auth/auth.guard';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
        children: [
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'product/:id',
            component: ProductDetailsComponent,
            canActivate: [authGuard]
          }
        ]
      }
    ]
  },
  {
    path: 'cart',
    component: CartComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
