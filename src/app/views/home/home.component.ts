import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/components/movie/movie.model';
import { MatSnackBar } from "@angular/material/snack-bar";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http'
import { MovieService } from 'src/app/components/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    navText: ["ANTERIOR", "PRÓXIMO"],
    responsive: {
      0: {
        items: 1
      },
      530: {
        items: 2
      },
      750: {
        items: 3
      },
      1024: {
        items: 4
      },
      1240: {
        items: 5
      },
      1430: {
        items: 6
      },
      1780: {
        items: 7
      }
    },
    nav: true
  }

  listMoviesPopular: Movie[]
  listMovies: Movie[]

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.read(15).subscribe(response => {
      this.listMoviesPopular = response.results
    })
    this.movieService.read(9).subscribe(response => {
      this.listMovies = response.results
    })
  }

}
