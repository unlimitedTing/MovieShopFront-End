import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { MovieSlideComponent } from './shared/components/movie-slide/movie-slide.component';


// attribute 
@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HeaderComponent,
    MovieListComponent,
    HomeComponent,
    MovieCardComponent,
    MovieSlideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
