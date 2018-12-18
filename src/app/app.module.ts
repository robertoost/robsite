import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { MusicPlaylistsComponent } from './pages/music-playlists/music-playlists.component';
import { MusicOriginalComponent } from './pages/music-original/music-original.component';
import { AppRoutes } from './app-routing.module';
import { ButtonComponent } from './shared/components/button/button.component';
import { PageContainerComponent } from './shared/components/page-container/page-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    MusicComponent,
    MusicPlaylistsComponent,
    MusicOriginalComponent,
    ButtonComponent,
    PageContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
