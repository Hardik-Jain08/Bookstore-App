import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: HttpService) { }
  
  getProducts() {
    return this.httpService.getApiCall('get/book');
  }
}
