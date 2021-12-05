import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {Team, Player, TeamsServiceService} from "../service/teams-service.service"


@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})

export class TeamsPage implements OnInit {
  teams: Team[];
  players: Player[];
  constructor(private router: Router, private service: TeamsServiceService) {}

  ngOnInit() {
    this.service.getAllTeams().subscribe(response => {
      this.teams = response;
      console.log(response);
    })
  }

  onClick(id:string){
    this.service.getPlayers(id).subscribe(response => {
      this.players = response;
      this.sendDataToNewPage(this.players);
      console.log(response);
    })
  }

  sendDataToNewPage(players:Player[]){
    let navigationExtras: NavigationExtras = {
      state: {
        players: players
      }
    };
    this.router.navigate(['/selected-team'], navigationExtras);
  }
}