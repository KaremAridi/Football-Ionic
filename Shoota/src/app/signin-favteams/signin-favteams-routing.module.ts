import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninFavteamsPage } from './signin-favteams.page';

const routes: Routes = [
  {
    path: '',
    component: SigninFavteamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninFavteamsPageRoutingModule {}
