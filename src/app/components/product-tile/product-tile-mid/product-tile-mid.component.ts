import { Beer } from './../../../models/beer.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile-mid',
  templateUrl: './product-tile-mid.component.html',
  styleUrls: ['./product-tile-mid.component.scss'],
})
export class ProductTileMidComponent implements OnInit {
  @Input() beer?: Beer;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigatoToBeer(id: number) {
    this.router.navigate([`all-beers/${id}`]);
  }
}
