import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
