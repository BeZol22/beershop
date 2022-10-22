import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Beer } from '../models/beer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  // beers$: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);

  readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.BASE_URL}beers?page=1&per_page=80`);
  }

  public getBeer(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.BASE_URL}beers/${id}`);
  }
}
