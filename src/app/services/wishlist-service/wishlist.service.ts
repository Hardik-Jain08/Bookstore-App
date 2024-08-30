import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpService: HttpService) { }

  addWishList(product_id: string, token: any) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'x-access-token': token,
    });
    return this.httpService.postApiCall(`add_wish_list/${product_id}`, {}, {headers});
  }
 
  removeWishList(cartItemId:string, token:string) {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': token
    })
    return this.httpService.deleteApiCall(`remove_wishlist_item/${cartItemId}`, {headers});
  }

  getWishList(token:string) {
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type':'application/json',
      'x-access-token': token
    })
    return this.httpService.getApiCall('get_wishlist_items', {headers});
  }
}
