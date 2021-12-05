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
    const user = form.value;
    if(user.email=='' || user.password==''){
      console.log("empty credentials")
    }else{
      this.service.getUser(user.email,user.password).subscribe(response =>{
        if(response[0]){
          //mbrook save locally and go to new page
          this.router.navigate(['user']);
        }else{
          console.log("wrong cred");
        }
      })
    }

  }


}
