import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/search.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { CounterComponent } from './components/counter/counter.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlsLoginComponent } from './pages/pls-login/pls-login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    CounterComponent,
    FeedbackComponent,
    BreadcrumbComponent,
    AccordianComponent,
    CardComponent,
    HomeComponent,
    DashboardComponent,
    PlsLoginComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    CartComponent,
    LoginSignupComponent,
    ProductDetailsComponent,
    WishlistComponent,
    OrderPlacedComponent,
    MyOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
