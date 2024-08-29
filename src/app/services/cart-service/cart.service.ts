import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpService: HttpService) { }

  addCartItem(product_id: string, data: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.postApiCall(`add_cart_item/${product_id}`, data, {headers});
  }

  updateCartItemQuantity(cartItemId: string, data: any, token:string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.putApiCall(`cart_item_quantity/${cartItemId}`, data, {headers});
  }

  removeCartItem(cartItemId: string, token:string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.deleteApiCall(`remove_cart_item/${cartItemId}`, {headers});
  }

  getCartItems(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.getApiCall('get_cart_items', {headers});
  }

}
