import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {Team,Player,TeamsServiceService} from "../service/teams-service.service"
import {League,LeagesServiceService} from "../service/leages-service.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  teams: Team[];
  leagues: League[];
  players: Player[];

  constructor(private router: Router, private service: TeamsServiceService, private serviceLeague: LeagesServiceService) {}

  ngOnInit() {
    this.service.getfavTeams('1').subscribe(response => {
      this.teams = response;
      console.log(response);
    })

    this.serviceLeague.getfavLeagues('1').subscribe(response => {
      this.leagues = response;
      console.log(response);
    })
  }

  toTeam(id:string,name:string,image:string){
    this.service.getPlayers(id).subscribe(response => {
      this.players = response;
      this.sendDataToTeamClicked(this.players,name,image);
      console.log(response);
    })
  }

  sendDataToTeamClicked(players:Player[],name:string,image:string){
    let navigationExtras: NavigationExtras = {
      state: {
        players: players,
        name:name,
        image:image,
      }
    };
    this.router.navigate(['/selected-team'], navigationExtras);
  }

  toLeague(){
    this.router.navigate(['selected-matches']);
  }

}
