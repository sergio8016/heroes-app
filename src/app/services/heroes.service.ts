import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../environments/environments";
import {map, Observable} from "rxjs";
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
}

