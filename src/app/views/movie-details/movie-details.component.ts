import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Movie } from 'src/app/components/movie/movie.model';
import { MovieService } from 'src/app/components/movie/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: number
  movie: Movie
  baseImgUrl = 'https://image.tmdb.org/t/p/original'
  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id")
    this.movieService.readById(this.id).subscribe(response_movie => {
      this.movie = response_movie

      this.movieService.readByIdImages(this.id).subscribe(response_movie_images => {
        this.movie.images = response_movie_images
        console.log(response_movie_images)
      })

      this.movieService.readByIdCredits(this.id).subscribe(response_movie_credits => {
        this.movie.credits = response_movie_credits
        console.log(response_movie_credits)
      })

    })
  }

  returnListMovie(){
    this.router.navigate([`/`]);
  }

}
