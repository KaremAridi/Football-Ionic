import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninFavleaguesPageRoutingModule } from './signin-favleagues-routing.module';

import { SigninFavleaguesPage } from './signin-favleagues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninFavleaguesPageRoutingModule
  ],
  declarations: [SigninFavleaguesPage]
})
export class SigninFavleaguesPageModule {}
