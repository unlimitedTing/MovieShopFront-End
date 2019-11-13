import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  movies: Movie[];
  constructor(private movieservice: MovieService) { }

  ngOnInit() {
    this.movieservice.getTopGrossingMovies().subscribe(
      m=>{
        this.movies=m;
        //console.table(this.movies);
      }
    );

    
  }

  buyMovie(movie:Movie){
    console.log('inside the home component event');
    console.log(movie);
    // step1:in the child component, create output decorator to emit event using eventEmit
    // for example, in child component,we want to send data to parent 
    //component when we click on a button,
    // your child click method should emit data using emit method 
    
    // stpe2:in the parent component,
    //since output is an event, we use normal brackets to subscribe the event and the data
    // would be inside the $event
  }

}
