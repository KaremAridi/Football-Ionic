import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import {Standing, LeagesServiceService} from "../service/leages-service.service"

@Component({
  selector: 'app-selected-matches',
  templateUrl: './selected-matches.page.html',
  styleUrls: ['./selected-matches.page.scss'],
})
export class SelectedMatchesPage implements OnInit {

  data: any;
  standing: Standing[];

  constructor(private route: ActivatedRoute, private router: Router, private service: LeagesServiceService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
        console.log("Data: " + this.data);
      }
    });
  }

  ngOnInit() {
  }

  toStandings(){
    this.router.navigate(['selected-standings']);
  }

  onClick(id:string,name:string){
    this.service.getStanding(id).subscribe(response => {
      this.standing = response;
      this.sendDataToNewPage(this.standing,name);
      console.log(response);
    })
  }

  sendDataToNewPage(standing:Standing[],name:string){
    let navigationExtras: NavigationExtras = {
      state: {
        standing: standing,
        name:name,
      }
    };
    this.router.navigate(['/selected-standings'], navigationExtras);
  }

}
