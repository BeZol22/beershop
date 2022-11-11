import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  DefaultDataServiceConfig,
  DefaultHttpUrlGenerator,
  DefaultPluralizer,
} from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/models/beer.model';

@Injectable()
export class BeersDataService extends DefaultDataService<Beer> {
  private defaultDataServiceConfig: DefaultDataServiceConfig;
  constructor(
    http: HttpClient,
    defaultDataServiceConfig: DefaultDataServiceConfig
  ) {
    const urlGenerator = new DefaultHttpUrlGenerator(new DefaultPluralizer([]));
    //const url = new DefaultHttpUrlGenerator();
    const urlRoot = defaultDataServiceConfig.root;
    const resourceUrls = {
      entityResourceUrl: `${defaultDataServiceConfig.root}/beer`,
      collectionResourceUrl: `${defaultDataServiceConfig.root}/beers`,
    };
    urlGenerator.registerHttpResourceUrls({ ['Beer']: resourceUrls });
    super('Beer', http, urlGenerator);
    this.defaultDataServiceConfig = defaultDataServiceConfig;
  }
}
