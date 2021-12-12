import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LikedTeam, User, UserServiceService} from "../service/user-service.service";
import {Team, Player, TeamsServiceService} from "../service/teams-service.service";

// export interface TeamCreate{
//   constructor(user_id, team_id) {
//     this.user_id = user_id;
//     this.team_id = team_id;
//   }
// }

@Component({
  selector: 'app-signin-favteams',
  templateUrl: './signin-favteams.page.html',
  styleUrls: ['./signin-favteams.page.scss'],
})
export class SigninFavteamsPage implements OnInit {
  teams: Team[];
  liked: LikedTeam[];
  users: User[];
  
  constructor(private router: Router, private service: UserServiceService, private servicePrint: TeamsServiceService) {}

  ngOnInit() {
    this.servicePrint.getAllTeams().subscribe(response => {
      this.teams = response;
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
      var temp = {user_id:user_id, team_id:this.checkedItems[i]};
      this.service.likeTeam(temp).subscribe();
    }
    this.router.navigate(['/signin-favleagues']);
  }
}
