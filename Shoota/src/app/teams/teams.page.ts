import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Team, TeamsServiceService} from "../service/teams-service.service"


@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})

export class TeamsPage implements OnInit {
  teams: Team[];

  constructor(private router: Router, private service: TeamsServiceService) {}

  ngOnInit() {
    this.service.getAllTeams().subscribe(response => {
      this.teams = response;
      console.log(response);
    })
  }

}
