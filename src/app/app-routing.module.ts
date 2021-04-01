import { ApexComponent } from './games/apex/apex.component';
import { CsgoComponent } from './components/games/csgo/csgo/csgo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'games/csgo', component: CsgoComponent },
  { path: 'games/apex', component: ApexComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
