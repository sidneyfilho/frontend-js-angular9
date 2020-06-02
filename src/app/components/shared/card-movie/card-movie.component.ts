import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie/movie.model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  
  baseImgUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face'
  @Input() movie: Movie;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  openMovie(movie:Movie){
    this.router.navigate([`/movie-details/${movie.id}`]);
  }
}
