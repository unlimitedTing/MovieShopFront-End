import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-slide',
  templateUrl: './movie-slide.component.html',
  styleUrls: ['./movie-slide.component.css']
})
export class MovieSlideComponent implements OnInit {

  @Input() movies: Movie[];// receive data from parent component
  constructor() { }

  ngOnInit() {
  }

}
