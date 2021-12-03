import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  team(){
    this.router.navigate(['selected-team']);
  }

}
