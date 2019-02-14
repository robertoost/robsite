import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { ArtComponent } from './pages/art/art.component';
import { GamesComponent } from './pages/games/games.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ValentinesComponent } from './pages/valentines/valentines.component';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [ {
      path: '',
      component: HomeComponent,
      data: { state: 'home' }
    }, {
      path: 'music',
      component: MusicComponent,
      data: { state: 'music' }
    }, {
      path: 'art',
      component: ArtComponent,
      data: { state: 'art' }
    }, {
      path: 'games',
      component: GamesComponent,
      data: { state: 'games' }
    }, {
      path: 'contact',
      component: ContactComponent,
      data: { state: 'contact' }
    }, {
      path: 'valentines/:recipient',
      component: ValentinesComponent,
      data: { state: 'valentines' }
    } ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(AppRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
