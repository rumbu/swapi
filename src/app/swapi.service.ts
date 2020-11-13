import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Planet, ApiResult } from './models';

const API_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(public http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this._get('planets');
  }

  _get(endpoint: string) {
    return this.http.get(`${API_URL}${endpoint}`)
      .pipe(
          first(),
          map((r: ApiResult) => r.results)
      );
  }
}
