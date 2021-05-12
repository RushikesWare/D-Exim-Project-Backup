
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIConstant,ENDPOINT } from '../Common/APIContant';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpclient:HttpClient) 
  { 
  }
ValidateUser (user:user)
{
  debugger
var userData = "UserName=" + user.UserName + "&Password=" + user.Password + "&grant_type=password";
var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });
return this.httpclient.post(ENDPOINT+ '/token',userData,{ headers: reqHeader })
}
}