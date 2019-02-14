import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { AppRoutes } from './app-routing.module';
import { ButtonComponent } from './shared/components/button/button.component';
import { PageContainerComponent } from './shared/components/page-container/page-container.component';
import { PlaylistComponent } from './pages/music/playlist/playlist.component';
import { ArtComponent } from './pages/art/art.component';
import { GamesComponent } from './pages/games/games.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MatToolbarModule } from '@angular/material';
import { ValentinesComponent } from './pages/valentines/valentines.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    MusicComponent,
    ButtonComponent,
    PageContainerComponent,
    PlaylistComponent,
    ArtComponent,
    GamesComponent,
    ContactComponent,
    ValentinesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
