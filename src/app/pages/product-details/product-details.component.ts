import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/models/beer.model';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  beer!: Observable<Beer>;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.beer = this.beerService.getBeer(id);
    this.beer.pipe((item) => item);
  }
}
