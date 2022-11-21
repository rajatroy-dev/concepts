import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-apprehension',
  templateUrl: './apprehension.component.html',
  styleUrls: ['./apprehension.component.scss']
})
export class ApprehensionComponent {
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterChange.emit(this.counter + 1);
  }

  decrement() {
    this.counterChange.emit(this.counter - 1);
  }
}
