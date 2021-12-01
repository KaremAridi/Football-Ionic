import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedTeamPageRoutingModule } from './selected-team-routing.module';

import { SelectedTeamPage } from './selected-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedTeamPageRoutingModule
  ],
  declarations: [SelectedTeamPage]
})
export class SelectedTeamPageModule {}
