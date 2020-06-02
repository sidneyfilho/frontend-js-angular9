import { Movie } from './movie.model';

//it was necessary to create this class because of the API structure
export interface MovieResponseAPI {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}