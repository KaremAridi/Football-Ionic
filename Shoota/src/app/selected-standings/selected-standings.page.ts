import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagesServiceService} from "../service/leages-service.service"

@Component({
  selector: 'app-selected-standings',
  templateUrl: './selected-standings.page.html',
  styleUrls: ['./selected-standings.page.scss'],
})
export class SelectedStandingsPage implements OnInit {
  data:any;

 constructor(private route: ActivatedRoute, private router: Router, private service: LeagesServiceService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
      }
    });
  }

  ngOnInit() {
  }

  toMatches(){
    this.router.navigate(['selected-matches']);
  }

}
