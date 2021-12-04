import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Team{
  id: string,
  name:string,
  image:string
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
}
