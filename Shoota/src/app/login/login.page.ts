import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserServiceService} from "../service/user-service.service"


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private service: UserServiceService) {}


  ngOnInit() {
  }

  register(){
    this.router.navigate(['signin']);
  }

  onSubmit(form:NgForm){
    console.log("Submitting");
    const user = form.value;
    this.service.getUser(user.email,user.password).subscribe(response =>{
      console.log(response);
    })
  }


}
