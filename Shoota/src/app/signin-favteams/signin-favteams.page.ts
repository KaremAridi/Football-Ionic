import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserServiceService} from "../service/user-service.service";
import {Team, Player, TeamsServiceService} from "../service/teams-service.service";

@Component({
  selector: 'app-signin-favteams',
  templateUrl: './signin-favteams.page.html',
  styleUrls: ['./signin-favteams.page.scss'],
})
export class SigninFavteamsPage implements OnInit {
  teams: Team[];
  
  constructor(private router: Router, private service: UserServiceService, private servicePrint: TeamsServiceService) {}

  ngOnInit() {
    this.servicePrint.getAllTeams().subscribe(response => {
      this.teams = response;
      console.log(response);
    })
  }

  onSubmit(){

  }

}
