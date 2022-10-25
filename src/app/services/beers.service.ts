import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getBeers(queryParams: any): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}beers`, {
      params: queryParams,
    });
  }

  public getBeer(id: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}beers/${id}`);
  }
}
