import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface User{
  id: string,
  first_name:string,
  last_name:string,
  email:string,
  password:string
}

export interface LikedTeam{
  user_id: string,
  team_id:string
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

  likeTeam(liked_team:LikedTeam){
    return this.http.post(this.url+"/likesTeam.php",JSON.stringify(liked_team));
  }

  unlikeTeam(user_id:string, team_id:string){
    return this.http.get<[User]>(this.url+"/unLikesTeam.php?user_id="+user_id+"&team_id="+team_id);
  }

  unlikeLeague(user_id:string, league_id:string){
    return this.http.get<[User]>(this.url+"/unLikesLeague.php?user_id="+user_id+"&league_id="+league_id);
  }

  saveLocally(user_id:string){
    return this.http.post(this.url+"/localstorage.php",JSON.stringify(user_id));
  }

  getLocalUser(){
    return this.http.get<[User]>(this.url+"/getCurrentUser.php");
  }
}
