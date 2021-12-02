import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninFavleaguesPage } from './signin-favleagues.page';

const routes: Routes = [
  {
    path: '',
    component: SigninFavleaguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninFavleaguesPageRoutingModule {}
