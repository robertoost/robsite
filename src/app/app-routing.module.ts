import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { MusicOriginalComponent } from './pages/music-original/music-original.component';
import { MusicPlaylistsComponent } from './pages/music-playlists/music-playlists.component';

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
      path: 'music/original',
      component: MusicOriginalComponent,
      data: { state: 'music-original' }
    }, {
      path: 'music/playlists',
      component: MusicPlaylistsComponent,
      data: { state: 'music-original' }
    } ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(AppRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
