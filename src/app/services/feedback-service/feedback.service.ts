import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpService: HttpService) { }

  addFeedback(product_id: string, data: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.postApiCall(`/bookstore_user/add/feedback/${product_id}`, data, {headers});
  }
  
  getFeedback(product_id: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.getApiCall(`get/feedback/${product_id}`,{headers});
  }
}
