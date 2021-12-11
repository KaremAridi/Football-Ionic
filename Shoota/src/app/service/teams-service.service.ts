import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Team{
  id: string,
  name:string,
  image:string
}

export interface Player{
  id: string,
  first_name:string,
  last_name:string,
  image:string,
}

@Injectable({
  providedIn: 'root'
})



export class TeamsServiceService {
  
  private url = "http://localhost/Football-PHP-API";

  constructor(private http: HttpClient) { }

  getAllTeams(){
    return this.http.get<[Team]>(this.url+"/getAllTeams.php");
  }

  getPlayers(id:string){
    return this.http.get<[Player]>(this.url+"/getPlayersByTeam.php?team_id="+id);
  }

  getfavTeams(id: string){
    return this.http.get<[Team]>(this.url+"/getFavTeams.php?user_id="+id);
  }
}
