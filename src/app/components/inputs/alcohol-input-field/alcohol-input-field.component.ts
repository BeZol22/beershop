import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-alcohol-input-field',
  templateUrl: './alcohol-input-field.component.html',
  styleUrls: ['./alcohol-input-field.component.scss'],
})
export class AlcoholInputFieldComponent implements OnInit {
  @Input() type?: string;
  @Input() placeholder?: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() control?: FormControl;
  @Input() id?: string;
  @Input() name?: string;

  constructor() {}

  ngOnInit(): void {}
}
