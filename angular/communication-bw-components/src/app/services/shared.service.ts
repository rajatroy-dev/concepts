import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {

  parentValue!: string;
  _parentValueBs = new BehaviorSubject<string>('');

  childValue!: string;
  _childValueBs = new BehaviorSubject<string>('');

  constructor() {
    this.parentValue;
    this.childValue;

    this._parentValueBs.next(this.parentValue);
    this._childValueBs.next(this.childValue);
  }

  updateParentValue(val: string) {
    this.parentValue = val;
    this._parentValueBs.next(this.parentValue);
  }

  updateChildValue(val: string) {
    this.childValue = val;
    this._childValueBs.next(this.childValue);
  }

}
