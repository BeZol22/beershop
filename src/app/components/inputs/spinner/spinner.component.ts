import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Output() inputValue: Subject<number> = new Subject<number>();
  @ViewChild('spinnerInput') spinnerInput?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  setAmount(event: any) {
    this.inputValue.next(event.target.value);
  }

  increaseAmount() {
    this.spinnerInput!.nativeElement.value++;
    this.inputValue.next(parseInt(this.spinnerInput!.nativeElement.value));
  }

  decreaseAmount() {
    if (this.spinnerInput!.nativeElement.value > 1) {
      this.spinnerInput!.nativeElement.value--;
      this.inputValue.next(parseInt(this.spinnerInput!.nativeElement.value));
    }
  }
}
