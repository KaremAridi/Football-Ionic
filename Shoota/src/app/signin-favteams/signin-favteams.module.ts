import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninFavteamsPageRoutingModule } from './signin-favteams-routing.module';

import { SigninFavteamsPage } from './signin-favteams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninFavteamsPageRoutingModule
  ],
  declarations: [SigninFavteamsPage]
})
export class SigninFavteamsPageModule {}
