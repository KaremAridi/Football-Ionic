import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //change to splashscreen
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'leagues',
    loadChildren: () => import('./leagues/leagues.module').then( m => m.LeaguesPageModule)
  },
  {
    path: 'selected-team',
    loadChildren: () => import('./selected-team/selected-team.module').then( m => m.SelectedTeamPageModule)
  },
  {
    path: 'selected-matches',
    loadChildren: () => import('./selected-matches/selected-matches.module').then( m => m.SelectedMatchesPageModule)
  },
  {
    path: 'selected-standings',
    loadChildren: () => import('./selected-standings/selected-standings.module').then( m => m.SelectedStandingsPageModule)
  },
  {
    path: 'signin-favteams',
    loadChildren: () => import('./signin-favteams/signin-favteams.module').then( m => m.SigninFavteamsPageModule)
  },
  {
    path: 'signin-favleagues',
    loadChildren: () => import('./signin-favleagues/signin-favleagues.module').then( m => m.SigninFavleaguesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
