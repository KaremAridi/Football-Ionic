import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Match{
  id:string,
  date:string,
  team_1:string,
  team_2:string,
  score_1:string,
  score_2:string,
  ended:string
}

export interface Standing{
  id:string,
  team_id:string,
  p:string,
  diff:string,
  pts:string,
  league_Id:string
}

export interface League{
  id: string,
  title:string,
  image:string
}

@Injectable({
  providedIn: 'root'
})

export class LeagesServiceService {

  private url = "http://localhost/Football-PHP-API";

  constructor(private http: HttpClient) { }

  getAllLeagues(){
    return this.http.get<[League]>(this.url+"/getAllLeagues.php");
  }

  getMatch(id:string){
    return this.http.get<[Match]>(this.url+"/getAllMatchesByLeagues.php?league_id="+id);
  }

  getStanding(id:string){
    return this.http.get<[Standing]>(this.url+"/getAllStandingsByLeagues.php?league_id="+id);
  }

  getfavLeagues(id: string){
    return this.http.get<[League]>(this.url+"/getFavLeagues.php?user_id="+id);
  }
  
}
