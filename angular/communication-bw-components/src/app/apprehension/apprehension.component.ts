import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-apprehension',
  templateUrl: './apprehension.component.html',
  styleUrls: ['./apprehension.component.scss']
})
export class ApprehensionComponent {
  parentValue!: string;
  childValue!: string;

  constructor(private sharedService: SharedService) {
    this.sharedService.childValue = "Initial";
  }

  ngAfterContentChecked() {
    this.parentValue = this.sharedService.parentValue;
  }

  changeParentValue(e: Event) {
    this.sharedService.updateParentValue((e.target as HTMLInputElement).value);
  }

  changeChildValue(e: Event) {
    this.sharedService.updateChildValue((e.target as HTMLInputElement).value);
  }
}
