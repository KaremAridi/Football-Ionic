import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserServiceService} from "../service/user-service.service"
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private service: UserServiceService,public toastController: ToastController) {}


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Wrong Credentials',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['signin']);
  }

  onSubmit(form:NgForm){
    const user = form.value;
    if(user.email=='' || user.password==''){
      console.log("empty credentials");
      this.presentToast();
    }else{
      this.service.getUser(user.email,user.password).subscribe(response =>{
        if(response[0]){
          this.service.saveLocally(response[0].id).subscribe(response =>{
          });
          this.router.navigate(['/signin-favteams']);
        }else{
          console.log("wrong cred");
          this.presentToast();
        }
      })
    }
  }
}
