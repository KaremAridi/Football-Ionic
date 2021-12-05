import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-matches',
  templateUrl: './selected-matches.page.html',
  styleUrls: ['./selected-matches.page.scss'],
})
export class SelectedMatchesPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  ngOnInit() {
  }

  toStandings(){
    this.router.navigate(['selected-standings']);
  }

}
