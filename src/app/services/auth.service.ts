import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = '';

  constructor(private http: HttpClient) {

  }

  register (body:any) {
    return this.http.post(`${environment.api}/register`, body);
  }

  login (body:any) {
    return this.http.post(`${environment.api}/login`, body,{withCredentials: true});
  }
}
