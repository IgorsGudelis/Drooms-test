import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CharacterModel, FilmModel, StarWarsResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  constructor(private http: HttpClient) {}

  getCharacterById(id: string): Observable<CharacterModel> {
    return this.http.get<CharacterModel>(
      `${environment.starWarsBaseUrl}/people/${id}`,
    );
  }

  getCharacterFilms(urls: string[]): Observable<FilmModel[]> {
    return this.getRequests<FilmModel>(urls);
  }

  getFilmById(id: string): Observable<FilmModel> {
    return this.http.get<FilmModel>(
      `${environment.starWarsBaseUrl}/films/${id}`,
    );
  }

  getFilmCharacters(urls: string[]): Observable<CharacterModel[]> {
    return this.getRequests<CharacterModel>(urls);
  }

  getFilms(): Observable<FilmModel[]> {
    return this.http
      .get<StarWarsResponse>(`${environment.starWarsBaseUrl}/films/`)
      .pipe(map(({ results }) => results as FilmModel[]));
  }

  private getRequests<T>(urls: string[]): Observable<T[]> {
    return forkJoin(urls.map(url => this.http.get<T>(url)));
  }
}
