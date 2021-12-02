import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedStandingsPage } from './selected-standings.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedStandingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedStandingsPageRoutingModule {}
