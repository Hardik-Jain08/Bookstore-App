import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpService: HttpService) { }

  addWishList(product_id: string, data:any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.postApiCall(`add_wish-list/${product_id}`, data, {headers});
  }
  
  removeWishList(cartItemId:string, token:string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.deleteApiCall(`remove_wishlist_item/${cartItemId}`, {headers});
  }

  getWishList(token:string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.getApiCall('get_wishlist_items', {headers});
  }
}
