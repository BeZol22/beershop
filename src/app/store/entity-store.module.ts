import { NgModule } from '@angular/core';
import { EntityDataService } from '@ngrx/data'; // <-- import the NgRx Data data service registry
import { BeersDataService } from '../pages/all-beers/beers-data.service';

@NgModule({
  providers: [BeersDataService], // <-- provide the data service
})
export class EntityStoreModule {
  constructor(
    entityDataService: EntityDataService,
    beersDataService: BeersDataService
  ) {
    entityDataService.registerService('Beer', beersDataService); // <-- register it
  }
}
