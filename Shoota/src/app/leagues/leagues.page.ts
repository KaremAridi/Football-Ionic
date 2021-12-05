import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras } from '@angular/router';
import {Match,League, LeagesServiceService} from "../service/leages-service.service"

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})

export class LeaguesPage implements OnInit {
  leagues: League[];
  matches: Match[];

  constructor(private router: Router, private service: LeagesServiceService) {}

   ngOnInit() {
    this.service.getAllLeagues().subscribe(response => {
      this.leagues = response;
      console.log(response);
    })
  }

  onClick(id:string,name:string){
    this.service.getMatch(id).subscribe(response => {
      this.matches = response;
      this.sendDataToNewPage(this.matches,name,id);
      console.log(response);
    })
  }

  sendDataToNewPage(matches:Match[],name:string,id:string){
    let navigationExtras: NavigationExtras = {
      state: {
        matches: matches,
        name:name,
        id:id,
      }
    };
    this.router.navigate(['/selected-matches'], navigationExtras);
  }

}
