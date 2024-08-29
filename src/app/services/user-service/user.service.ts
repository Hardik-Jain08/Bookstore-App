import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  signup(data:any) {
    return this.httpService.postApiCall('registration', data);
  }
  login(data:any) {
    return this.httpService.postApiCall('login', data);
  }
  verifyEmail(token: string) {
    const url = `verification/${token}`;
    return this.httpService.postApiCall(url, {});
  }
}
