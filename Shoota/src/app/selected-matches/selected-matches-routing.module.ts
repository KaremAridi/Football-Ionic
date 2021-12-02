import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedMatchesPage } from './selected-matches.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedMatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedMatchesPageRoutingModule {}
