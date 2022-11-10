import { map, Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';

import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as BeersActions from '../../store/beer.actions';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss'],
})
export class AllBeersComponent implements OnInit {
  beers?: Beer[];
  subscription?: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(BeersActions.fetchBeers());

    this.subscription = this.store
      .select('beers')
      .pipe(map((beersState) => beersState.beers))
      .subscribe((beers: Beer[]) => {
        this.beers = beers;
        console.log('hello', this.beers);
      });
    // this.beers$ = this.store
    //   .select('beers')
    //   .pipe(map((beersState) => beersState.beers));
  }
}
