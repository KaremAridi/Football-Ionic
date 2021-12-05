import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selected-team',
  templateUrl: './selected-team.page.html',
  styleUrls: ['./selected-team.page.scss'],
})
export class SelectedTeamPage implements OnInit {

  data:any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  ngOnInit() {
  }

}
