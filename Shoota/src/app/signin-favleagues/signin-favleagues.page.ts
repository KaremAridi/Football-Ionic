import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LikedLeague, User, UserServiceService} from "../service/user-service.service";
import { LeagesServiceService, League } from '../service/leages-service.service';


@Component({
  selector: 'app-signin-favleagues',
  templateUrl: './signin-favleagues.page.html',
  styleUrls: ['./signin-favleagues.page.scss'],
})
export class SigninFavleaguesPage implements OnInit {
  leagues: League[];
  liked: LikedLeague[];
  users: User[];

  constructor(private router: Router, private service: UserServiceService, private servicePrint: LeagesServiceService) {}

  ngOnInit() {
    this.servicePrint.getAllLeagues().subscribe(response => {
      this.leagues = response;
      console.log(response);
    })

    this.service.getLocalUser().subscribe(response =>{
      this.users=response;
      console.log(this.users)
    });
  }

  checkedItems = []

 onChange(item) {
    if(this.checkedItems.includes(item)) {
      const index = this.checkedItems.indexOf(item, 0);
      if (index > -1) {
        this.checkedItems.splice(index, 1);
      }
    } else {
      this.checkedItems.push(item)
    }
    console.log(this.checkedItems);
  }

  onSubmit(user_id: string){
    for(var i = 0;i<this.checkedItems.length;i++){
      var temp = {user_id:user_id, league_id:this.checkedItems[i]};
      this.service.likeLeague(temp).subscribe();
    }
    this.router.navigate(['/user']);
  }

}
