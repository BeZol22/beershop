import { ActionReducerMap } from '@ngrx/store';

import * as fromBeers from './beer.reducer';

export interface AppState {
  beers: fromBeers.State;
}
