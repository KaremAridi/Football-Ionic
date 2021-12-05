import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface User{
  id: string,
  first_name:string,
  last_name:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url = "http://localhost/Football-PHP-API";

  constructor(private http: HttpClient) { }
  // ADD USER INFO PHP
  getUser(email:string,pass:string){
    return this.http.get<[User]>(this.url+"/login.php?email="+email+"&password="+pass);
  }

  createUser(user:User){
    return this.http.post(this.url+"/signup.php",JSON.stringify(user));
  }

}
