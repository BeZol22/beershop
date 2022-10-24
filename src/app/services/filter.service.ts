import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filters: any = {
    malt: [
      { name: 'EXTRA PALE', value: 'Extra Pale' },
      { name: 'CARAMALT', value: 'Caramalt' },
      { name: 'MUNICH', value: 'Munich' },
      { name: 'CHOCOLATE', value: 'Chocolate' },
      { name: 'DARK CRYSTAL', value: 'Dark Crystal' },
    ],
    hops: [
      { name: 'FUGGLES', value: 'Fuggles' },
      { name: 'GOLD', value: 'Gold' },
      { name: 'CASCADE', value: 'Cascade' },
      { name: 'AMARILLO', value: 'Amarillo' },
      { name: 'SIMCOE', value: 'Simcoe' },
      { name: 'MOTUEKA', value: 'Motueka' },
      { name: 'CROSS', value: 'Cross' },
      { name: 'CITRA', value: 'Citra' },
      { name: 'MAGNUM', value: 'Magnum' },
      { name: 'MOSAIC', value: 'Mosaic' },
      { name: 'Perle', value: 'Perle' },
      { name: 'SAAZ', value: 'Saaz' },
    ],
  };

  constructor() {}
}
