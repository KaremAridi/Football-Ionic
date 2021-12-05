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

  onClick(id:string,name:string,image:string){
    this.service.getPlayers(id).subscribe(response => {
      this.players = response;
      this.sendDataToNewPage(this.players,name,image);
      console.log(response);
    })
  }

  sendDataToNewPage(players:Player[],name:string,image:string){
    let navigationExtras: NavigationExtras = {
      state: {
        players: players,
        name:name,
        image:image,
      }
    };
    this.router.navigate(['/selected-team'], navigationExtras);
  }
}