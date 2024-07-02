import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../environments/environments";
import {catchError, map, Observable, of} from "rxjs";
import {MarvelApiResponse, Result} from "../interfaces/hero.interface";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  protected httpClient: HttpClient = inject(HttpClient);
  private url: string = 'https://gateway.marvel.com:443/v1/public/characters';

  constructor() {
  }

  getHeroes(): Observable<Result[]> {
    return this.httpClient.get<MarvelApiResponse>(`${this.url}?apikey=${environments.apiKey}&limit=100&series=24229`)
      .pipe(
        map((response: MarvelApiResponse) => response.data.results)
      );
  }

  getHeroById(id: string): Observable<Result> {
    return this.httpClient.get<MarvelApiResponse>(`${this.url}/${id}?apikey=${environments.apiKey}`)
      .pipe(
        map((response: MarvelApiResponse) => response.data.results[0])
      )
  }

  getSuggestions(query: string): Observable<Result[]> {
    return this.httpClient.get<MarvelApiResponse>(`${this.url}?apikey=${environments.apiKey}&nameStartsWith=${query}&limit=100`)
      .pipe(
        map((response: MarvelApiResponse) => response.data.results),
        catchError(() => of([]))
      );
  }
}

