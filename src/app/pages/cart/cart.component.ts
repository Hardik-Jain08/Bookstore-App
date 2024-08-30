import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartValue = 1;
  isOrderSummaryVisible = false;
  isFormContainerVisible = false;
  cartItems: any = [];
  isLogin = false;
  isEdit = true;
  location = 'Use current location';
  token = localStorage.getItem('accessToken')

  constructor(private cart: CartService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('accessToken')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

    this.cart.getCartItems(this.token!).subscribe({
      next: (data: any) => {
        console.log('cart:', data.result);
        this.cartItems = data.result;
        localStorage.setItem('user', this.cartItems[0].user_id);
        this.location = this.cartItems[0].user_id.address[0].fullAddress;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  formFunction() {
    if (localStorage.getItem('accessToken')) {
      this.isFormContainerVisible = !this.isFormContainerVisible;
      

    } else {
      this.router.navigate(['/login']);
    }
  }

  orderFunction() {
    this.isOrderSummaryVisible = !this.isOrderSummaryVisible;
  }
  incValue(ind: any) {
    this.cartItems[ind].quantityToBuy++;
    this.cart.updateCartItemQuantity(this.cartItems[ind]._id, {
        quantityToBuy: this.cartItems[ind].quantityToBuy,
      }, this.token!)
      .subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  edit() {
    this.isEdit = !this.isEdit;
  }
  decValue(ind: any) {
    if (this.cartItems[ind].quantityToBuy > 1) {
      this.cartItems[ind].quantityToBuy--;
      this.cart
        .updateCartItemQuantity(this.cartItems[ind]._id, {
          quantityToBuy: this.cartItems[ind].quantityToBuy,
        }, this.token!)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
  removeItem(ind: any) {
    this.cart.removeCartItem(this.cartItems[ind]._id, this.token!).subscribe({
      next: (data: any) => {
        console.log(data);
        this.cartItems.splice(ind, 1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
