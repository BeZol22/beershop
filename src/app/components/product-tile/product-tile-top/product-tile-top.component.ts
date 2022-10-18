import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-tile-top',
  templateUrl: './product-tile-top.component.html',
  styleUrls: ['./product-tile-top.component.scss'],
})
export class ProductTileTopComponent implements OnInit {
  buttonEnabled: boolean = true;
  compare = 'icon-compare';
  favorite = 'icon-make-favorite';

  constructor() {}

  ngOnInit(): void {}
}
