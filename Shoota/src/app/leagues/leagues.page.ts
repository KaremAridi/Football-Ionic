import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {League, LeagesServiceService} from "../service/leages-service.service"

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.page.html',
  styleUrls: ['./leagues.page.scss'],
})

export class LeaguesPage implements OnInit {
  leagues: League[];

  constructor(private router: Router, private service: LeagesServiceService) {}

   ngOnInit() {
    this.service.getAllLeagues().subscribe(response => {
      this.leagues = response;
      console.log(response);
    })
  }

  selectedLeague(){
    this.router.navigate(['selected-matches']);
  }

}
