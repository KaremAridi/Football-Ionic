import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedStandingsPageRoutingModule } from './selected-standings-routing.module';

import { SelectedStandingsPage } from './selected-standings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedStandingsPageRoutingModule
  ],
  declarations: [SelectedStandingsPage]
})
export class SelectedStandingsPageModule {}
