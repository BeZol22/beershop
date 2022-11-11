import { filter, first, Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';
import { BeersService } from './beers.service';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss'],
})
export class AllBeersComponent implements OnInit {
  beers$?: Observable<Beer[]>;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.reload();
    // this.beersService.loaded$.pipe(
    //   tap((loaded) => {
    //     if (!loaded) {
    //       console.log('hello');
    //       this.beers$ = this.beersService.getAll();
    //     }
    //   }),
    //   filter((loaded) => !!loaded),
    //   first()
    // );
    // this.beers$ = this.beersService.getAll();
  }
  reload() {
    this.beers$ = this.beersService.entities$;
  }
}
