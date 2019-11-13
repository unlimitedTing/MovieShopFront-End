import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiservice:ApiService) { }
  getTopGrossingMovies():Observable<Movie[]>{
    return this.apiservice.getAll('/movie/topgrossing')
  }

 
}
