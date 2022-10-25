import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
})
export class TextButtonComponent implements OnInit {
  @Input() label?: string;
  @Input() width?: string;
  @Input() height?: string;

  constructor() {}

  ngOnInit(): void {}
}
