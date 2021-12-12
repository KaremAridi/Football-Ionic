import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserServiceService} from "../service/user-service.service"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  user;
  constructor(private router: Router, private service: UserServiceService) {}

  ngOnInit() {
  }

  login(){
    this.router.navigate(['login']);
  }

  onSubmit(form:NgForm){
    console.log("Submitting");
    this.user = form.value;

    this.service.createUser(this.user).subscribe(response =>{
      console.log(response);
    })
    setTimeout(() => {    this.service.getUser(form.value.email,form.value.password).subscribe(response => {
      console.log("response");
      console.log(response[0].id);
      this.service.saveLocally(response[0].id).subscribe();
    })
    
    this.router.navigate(['signin-favteams']);
    //mbrook save locally and go to new page
  }, 1000);

    
    
  }

}
