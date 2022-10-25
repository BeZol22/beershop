import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Beer } from 'src/app/models/beer.model';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss'],
})
export class AllBeersComponent implements OnInit {
  beers!: Observable<Beer[]>;

  constructor(public beersService: BeersService) {}

  ngOnInit(): void {
    this.beers = this.beersService.getBeers('?page=1&per_page=80');
  }
}
