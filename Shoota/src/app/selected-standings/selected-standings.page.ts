import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-standings',
  templateUrl: './selected-standings.page.html',
  styleUrls: ['./selected-standings.page.scss'],
})
export class SelectedStandingsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  toMatches(){
    this.router.navigate(['selected-matches']);
  }

}
