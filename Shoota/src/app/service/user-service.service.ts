import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface User{
  id: string,
  first_name:string,
  last_name:string,
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = "http://localhost/Football-PHP-API";

  constructor(private http: HttpClient) { }
  // ADD USER INFO PHP
  getUserInfo(){
    return this.http.get<[User]>(this.url+"...");
  }
}
