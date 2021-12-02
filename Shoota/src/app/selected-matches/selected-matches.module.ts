import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedMatchesPageRoutingModule } from './selected-matches-routing.module';

import { SelectedMatchesPage } from './selected-matches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedMatchesPageRoutingModule
  ],
  declarations: [SelectedMatchesPage]
})
export class SelectedMatchesPageModule {}
