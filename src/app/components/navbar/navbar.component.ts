import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCnt = 0;
  ishome = this.router.url === "/home";
  isLoggedIn = false;
  showdialog = false;
  searchTerm: string = '';
  token = localStorage.getItem('accessToken');
  constructor(private router:Router, private cart: CartService){

  }
  ngOnInit() {

    this.cart.getCartItems(this.token!).subscribe({

      next: (data: any) => {
        console.log('user', data.result[0].user_id._id);
        this.cartCnt = data.result.length;
        localStorage.setItem('userId', data.result[0].user_id._id);
      },
      error: (error) => {
        console.log(error);
      },
    });

    if (localStorage.getItem('acessToken')) {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
    } else this.isLoggedIn = false;
  }
  openwishlist() {
    this.router.navigate(['/wishlist']);
    this.showdialog = false;
  }
  openorders() {
    this.router.navigate(['/myorder']);
    this.showdialog = false;
  }

toggle() {
  this.showdialog = !this.showdialog;
}
openProfile = () => {
  this.router.navigate(['/profile']);
  this.showdialog = false;
};

logout = () => {
  localStorage.removeItem('acesstoken');
  window.location.reload();
};
}
