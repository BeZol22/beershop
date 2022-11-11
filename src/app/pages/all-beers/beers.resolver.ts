import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { BeersService } from './beers.service';

@Injectable()
export class BeersResolver implements Resolve<boolean> {
  constructor(private beersService: BeersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.beersService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.beersService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
