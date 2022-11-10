import { createAction, props } from '@ngrx/store';
import { Beer } from '../models/beer.model';

// export const SET_BEERS = '[ALL BEERS] Set Beers';
// export const FETCH_BEERS = '[ALL BEERS] Fetch Beers';
// export const ADD_BEER = '[ALL BEERS] Add Beer';
// export const UPDATE_BEER = '[ALL BEERS] Update Beer';
// export const DELETE_BEER = '[ALL BEERS] Delete Beer';
// export const STORE_BEERS = '[ALL BEERS] Store Beers';

// export class SetBeers implements Action {
//   readonly type = SET_BEERS;

//   constructor(public payload: Beer[]) {}
// }

// export class FetchBeers implements Action {
//   readonly type = FETCH_BEERS;
// }

// export class AddBeer implements Action {
//   readonly type = ADD_BEER;

//   constructor(public payload: Beer) {}
// }

// export class UpdateBeer implements Action {
//   readonly type = UPDATE_BEER;

//   constructor(public payload: { index: number; newBeer: Beer }) {}
// }

// export class DeleteBeer implements Action {
//   readonly type = DELETE_BEER;

//   constructor(public payload: number) {}
// }

// export class StoreBeers implements Action {
//   readonly type = STORE_BEERS;
// }

export const addBeer = createAction(
  '[Beer] Add Beer',
  props<{
    beer: Beer;
  }>()
);

export const updateBeer = createAction(
  '[Beer] Update Beer',
  props<{
    index: number;
    beer: Beer;
  }>()
);

export const deleteBeer = createAction(
  '[Beer] Delete Beer',
  props<{
    index: number;
  }>()
);

export const setBeers = createAction(
  '[Beer] Set Beers',
  props<{
    beers: Beer[];
  }>()
);

export const fetchBeers = createAction('[Beer] Fetch Beers');

export const storeBeers = createAction('[Beer] Store Beers');

// export type BeersActions =
//   | SetBeers
//   | FetchBeers
//   | AddBeer
//   | UpdateBeer
//   | DeleteBeer
//   | StoreBeers;
