import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {Team,Player,TeamsServiceService} from "../service/teams-service.service"
import {League,Match,LeagesServiceService} from "../service/leages-service.service"

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  teams: Team[];
  leagues: League[];
  players: Player[];
  matches: Match[];

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

  toLeague(id:string,name:string){
    this.serviceLeague.getMatch(id).subscribe(response => {
      this.matches = response;
      this.sendDataToLeagueClicked(this.matches,name,id);
      console.log(response);
    })
  }

  sendDataToLeagueClicked(matches:Match[],name:string,id:string){
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
