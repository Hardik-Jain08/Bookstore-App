import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postApiCall(endpoint:string, data: any, options?:any){
    return this.http.post(environment.BASE_URL + endpoint, data, options);
  }

  getApiCall(endpoint:string, options?:any){
    return this.http.get(environment.BASE_URL + endpoint, options);
  }

  putApiCall(endpoint:string, data:any, options?:any){
    return this.http.put(environment.BASE_URL + endpoint, data, options);
  }

  deleteApiCall(endpoint:string,options?:any) {
    return this.http.delete(environment.BASE_URL + endpoint, options);
  }
}
