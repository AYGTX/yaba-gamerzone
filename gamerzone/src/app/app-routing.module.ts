import { StatsComponent } from './components/games/csgo/playerStats/stats.component';
import { ApexComponent } from './components/games/apex/apex.component';
import { CsgoComponent } from './components/games/csgo/csgo/csgo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'games/csgo', component: CsgoComponent },
  { path: 'games/apex', component: ApexComponent },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'compare', component: StatsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
