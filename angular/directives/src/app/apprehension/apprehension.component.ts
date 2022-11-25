import { Component } from '@angular/core';

@Component({
  selector: 'app-apprehension',
  templateUrl: './apprehension.component.html',
  styleUrls: ['./apprehension.component.scss']
})
export class ApprehensionComponent {
  ngStyleClicked = false;
  ngClassClicked = false;
  ngModelText = "";

  handleNgStyleClick() {
    this.ngStyleClicked = !this.ngStyleClicked;
  }

  handleNgClassClicked() {
    this.ngClassClicked = !this.ngClassClicked;
  }
}
