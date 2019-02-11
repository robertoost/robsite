import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';

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
    } ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(AppRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
