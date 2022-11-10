import { Action, createReducer, on } from '@ngrx/store';
import { Beer } from '../models/beer.model';
import * as BeersActions from './beer.actions';

export interface State {
  beers: Beer[];
}

const initialState: State = {
  beers: [],
};

const _beerReducer = createReducer(
  initialState,

  on(BeersActions.addBeer, (state, action) => ({
    ...state,
    beers: state.beers.concat({ ...action.beer }),
  })),

  on(BeersActions.updateBeer, (state, action) => ({
    ...state,
    beers: state.beers.map((beer, index) =>
      index === action.index ? { ...action.beer } : beer
    ),
  })),

  on(BeersActions.deleteBeer, (state, action) => ({
    ...state,
    beers: state.beers.filter((_, index) => index !== action.index),
  })),

  on(BeersActions.setBeers, (state, action) => ({
    ...state,
    beers: [...action.beers],
  }))
);

export function beerReducer(state: State, action: Action) {
  return _beerReducer(state, action);
}

// export function beerReducer(
//   state = initialState,
//   action: BeersActions.BeersActions
// ) {
//   switch (action.type) {
//     case BeersActions.SET_BEERS:
//       return {
//         ...state,
//         beers: [...action.payload],
//       };
//     case BeersActions.ADD_BEER:
//       return {
//         ...state,
//         beers: [...state.beers, action.payload],
//       };
//     case BeersActions.UPDATE_BEER:
//       const updatedBeer = {
//         ...state.beers[action.payload.index],
//         ...action.payload.newBeer,
//       };

//       const updatedBeers = [...state.beers];
//       updatedBeers[action.payload.index] = updatedBeer;

//       return {
//         ...state,
//         beers: updatedBeers,
//       };
//     case BeersActions.DELETE_BEER:
//       return {
//         ...state,
//         beers: state.beers.filter((beer, index) => {
//           return index !== action.payload;
//         }),
//       };
//     default:
//       return state;
//   }
// }
