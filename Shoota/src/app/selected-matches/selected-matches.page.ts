import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-matches',
  templateUrl: './selected-matches.page.html',
  styleUrls: ['./selected-matches.page.scss'],
})
export class SelectedMatchesPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  toStandings(){
    this.router.navigate(['selected-standings']);
  }

}
