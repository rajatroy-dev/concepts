import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentValue!: string;
  childValue!: string;

  constructor(private sharedService: SharedService) {
    this.sharedService.parentValue = "Initial";
  }

  ngAfterContentChecked() {
    this.childValue = this.sharedService.childValue;
  }

  changeParentValue(e: Event) {
    this.sharedService.updateParentValue((e.target as HTMLInputElement).value);
  }

  changeChildValue(e: Event) {
    this.sharedService.updateChildValue((e.target as HTMLInputElement).value);
  }
}
