import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  constructor(private httpService: HttpService) { }

  editUser(data:any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpService.putApiCall('edit_user', data, {headers});
  }
}
