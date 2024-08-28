import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { AppMaterialModule } from './app-material/app-material.module';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 19ed7919398dc58dc1c53ad266884ae357d7da49
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
    MatCardModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    AppMaterialModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
=======
    AppMaterialModule,
<<<<<<< HEAD
    FormsModule,
=======
>>>>>>> feat/Card_PleaseLogin
    BrowserAnimationsModule,
    CardComponent,
>>>>>>> 19ed7919398dc58dc1c53ad266884ae357d7da49
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
