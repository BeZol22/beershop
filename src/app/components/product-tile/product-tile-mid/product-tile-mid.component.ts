import { Beer } from './../../../models/beer.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tile-mid',
  templateUrl: './product-tile-mid.component.html',
  styleUrls: ['./product-tile-mid.component.scss'],
})
export class ProductTileMidComponent implements OnInit {
  @Input() beer?: Beer;

  constructor() {}

  ngOnInit(): void {}
}
