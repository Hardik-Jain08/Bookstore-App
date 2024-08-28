import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {
  private apiurl ='https://bookstore.incubation.bridgelabz.com/bookstore_app/swagger/api/#/Admin-Order/get_bookstore_user_admin_get_order';
  constructor(private http:HttpClient) { }
  getOrders():Observable<any[]>{
    return this.http.get<any[]>(this.apiurl);
  }
  getOrderById(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiurl}/${id}`);
  }
  updateOrder(order:any):Observable<any>{
    return this.http.put<any>(`${this.apiurl}/${order.id}`,order);
  }
}
