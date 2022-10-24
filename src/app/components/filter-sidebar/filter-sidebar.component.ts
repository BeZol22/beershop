import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss'],
})
export class FilterSidebarComponent implements OnInit {
  isFirstLabelOn: boolean = true;
  isSecondLabelOn: boolean = true;

  constructor(public filterService: FilterService) {}

  ngOnInit(): void {}
}
