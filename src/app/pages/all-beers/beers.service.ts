import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Beer } from 'src/app/models/beer.model';

@Injectable()
export class BeersService extends EntityCollectionServiceBase<Beer> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Beer', serviceElementsFactory);
  }
}
