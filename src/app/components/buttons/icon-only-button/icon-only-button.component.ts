import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-only-button',
  templateUrl: './icon-only-button.component.html',
  styleUrls: ['./icon-only-button.component.scss'],
})
export class IconOnlyButtonComponent implements OnInit {
  @Input() image = '';
  @Input() enabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
