import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {Team,Player,TeamsServiceService} from "../service/teams-service.service"
import {League,Match,LeagesServiceService} from "../service/leages-service.service"
import { User, UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: User[];
  teams: Team[];
  leagues: League[];
  players: Player[];
  matches: Match[];

  constructor(private router: Router, private service: TeamsServiceService, private serviceLeague: LeagesServiceService, private serviceUser: UserServiceService) {}

  ngOnInit() {
    this.serviceUser.getLocalUser().subscribe(response =>{
      this.users=response;
      this.service.getfavTeams(this.users[0].id).subscribe(response => {
        this.teams = response;
        console.log(response);
      })
  
      this.serviceLeague.getfavLeagues(this.users[0].id).subscribe(response => {
        this.leagues = response;
        console.log(response);
      })
    });
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

  deleteFavTeam(user_id:string, team_id:string){
    this.serviceUser.unlikeTeam(user_id,team_id).subscribe(response => {
      console.log("Team Deleted");
    });
  }

  deleteFavLeague(user_id:string, league_id:string){
    this.serviceUser.unlikeLeague(user_id,league_id).subscribe(response => {
      console.log("League Deleted");
    });
  }

}
