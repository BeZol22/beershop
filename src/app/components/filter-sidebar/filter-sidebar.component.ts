import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss'],
})
export class FilterSidebarComponent implements OnInit {
  isFirstLabelOn: boolean = true;
  isSecondLabelOn: boolean = true;
  isAlcoholLabelOn: boolean = true;

  alcoholForm: FormGroup;

  constructor(
    public filterService: FilterService,
    fb: FormBuilder,
    private router: Router,
    public beerService: BeersService
  ) {
    // Need form-validation
    this.alcoholForm = fb.group({
      from: [''],
      until: [''],
    });
  }

  ngOnInit(): void {}

  get from(): FormControl {
    return this.alcoholForm.get('from') as FormControl;
  }

  get until(): FormControl {
    return this.alcoholForm.get('until') as FormControl;
  }

  //Filter beers according ABV
  onAlcoholFilterApplied(): void {
    // this.beerService.getBeers(
    //   `?abv_gt=${this.from.value}&abv_lt=${this.until.value}`
    // );
    this.router.navigate(['/all-beers'], {
      queryParams: { abv_gt: this.from.value, abv_lt: this.until.value },
    });
  }
}
