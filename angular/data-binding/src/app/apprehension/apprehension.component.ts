import { Component } from '@angular/core';

@Component({
  selector: 'app-apprehension',
  templateUrl: './apprehension.component.html',
  styleUrls: ['./apprehension.component.scss']
})
export class ApprehensionComponent {
  text = "This is a input";
  anotherText = "This is another text";

  handleInputChange(event: Event) {
    this.text = (event.target as HTMLInputElement).value;
    console.log(this.text);
  }
}
