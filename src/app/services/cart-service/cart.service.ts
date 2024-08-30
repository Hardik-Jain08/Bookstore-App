import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService: HttpService) { }

  addCartItem(product_id: string, token: string) {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': token
    })
    return this.httpService.postApiCall(`add_cart_item/${product_id}`, {}, {headers});
  }
 
  // addToCart(url: string) {
  //   const token = localStorage.getItem('accessToken');
  //   const myHeaders = new Headers();
  //   myHeaders.append('x-access-token', `${token}`);
  //   return this.http.addItemToCart(url, true, { headers: myHeaders });
  // }


  updateCartItemQuantity(cartItemId: string, data: any, token:string) {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': token
    })
    return this.httpService.putApiCall(`cart_item_quantity/${cartItemId}`, data, {headers});
  }

  removeCartItem(cartItemId: string, token:string) {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': token
    })
    return this.httpService.deleteApiCall(`remove_cart_item/${cartItemId}`, {headers});
  }

  getCartItems(token: string) {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': token
    })
    return this.httpService.getApiCall('get_cart_items', {headers});
  }

}
