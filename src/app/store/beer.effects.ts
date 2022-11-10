import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as fromApp from './app.reducer';
import * as BeersActions from './beer.actions';
import { Beer } from '../models/beer.model';

@Injectable()
export class BeerEffects {
  // @Effect()
  // fetchBeers = this.actions$.pipe(
  //   ofType(BeersActions.FETCH_BEERS),
  //   switchMap(() => {
  //     return this.http.get<Beer[]>(
  //       'https://api.punkapi.com/v2/beers'
  //     );
  //   }),
  //   map(beers => {
  //     return beers.map(beer => {
  //       return {
  //         ...beer,
  //         ingredients: beer.ingredients ? beer.ingredients : []
  //       };
  //     });
  //   }),
  //   map(recipes => {
  //     return new RecipesActions.SetRecipes(recipes);
  //   })
  // );

  // @Effect({dispatch: false})
  // storeRecipes = this.actions$.pipe(
  //   ofType(RecipesActions.STORE_RECIPES),
  //   withLatestFrom(this.store.select('recipes')),
  //   switchMap(([actionData, recipesState]) => {
  //     return this.http.put(
  //       'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
  //       recipesState.recipes
  //     );
  //   })
  // );

  fetchBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeersActions.fetchBeers),
      switchMap(() => {
        return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers');
      }),
      // map((beers) => {
      //   return beers.map((beer) => {
      //     return {
      //       ...beer,
      //       ingredients: beer.ingredients ? beer.ingredients : [],
      //     };
      //   });
      // }),
      map((beers) => {
        return BeersActions.setBeers({ beers });
      })
    )
  );

  // storeRecipes$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(RecipesActions.storeRecipes),
  //     withLatestFrom(this.store.select('recipes')),
  //     switchMap(([actionData, recipesState]) => {
  //       return this.http.put(
  //         'https://xxxxxxxxxx.firebaseio.com/recipes.json',
  //         recipesState.recipes
  //       );
  //     })
  //   ),
  //   { dispatch: false }
  // );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
