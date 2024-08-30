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
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from './services/http-service/http.service';
import { CartService } from './services/cart-service/cart.service';
import { CustomerDetailService } from './services/customerDetail-service/customer-detail.service';
import { FeedbackService } from './services/feedback-service/feedback.service';
import { ProductService } from './services/product-service/product.service';
import { UserService } from './services/user-service/user.service';
import { WishlistService } from './services/wishlist-service/wishlist.service';
import { OrderService } from './services/order-service/order.service';
import { ImgService } from './services/img-service/img.service';

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
    HomeComponent,
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
    DashboardComponent,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CardComponent,
  ],
  providers: [HttpService, CartService, CustomerDetailService, FeedbackService, ProductService, UserService, WishlistService, OrderService, ImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
