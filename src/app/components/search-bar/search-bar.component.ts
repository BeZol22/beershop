import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({
      searchText: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  public onSearch(): void {
    //search-service
  }
}
