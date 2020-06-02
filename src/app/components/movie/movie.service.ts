import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { MovieResponseAPI } from 'src/app/components/movie/movie-response-api.model';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3/movie'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  read(page: number): Observable<MovieResponseAPI> {
    return this.http.get<MovieResponseAPI>(`${this.baseUrl}/popular?api_key=59f51da7fe8525265ab60d6ae040f5aa&language=pt-BR&page=${page}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/${id}?api_key=59f51da7fe8525265ab60d6ae040f5aa&language=pt-BR`;
    return this.http.get<Movie>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByIdImages(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}/images?api_key=59f51da7fe8525265ab60d6ae040f5aa`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByIdCredits(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}/credits?api_key=59f51da7fe8525265ab60d6ae040f5aa`;
    return this.http.get<any>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}