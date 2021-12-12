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

    //bug on signin
    this.router.navigate(['login']);
  }
}
