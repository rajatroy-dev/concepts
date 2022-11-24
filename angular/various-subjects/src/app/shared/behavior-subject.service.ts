import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

/**
 * 1. Remembers only the last value
 * 2. Need to specify an initial value
 */
@Injectable()
export class BehaviorSubjectService {
  behaviorSubjectValue!: number;
  _behaviorSubjectValueBs = new BehaviorSubject<number>(0); // has initial value

  constructor() {
    this._behaviorSubjectValueBs.next(this.behaviorSubjectValue);
  }

  next(val: number) {
    this.behaviorSubjectValue = val;
    this._behaviorSubjectValueBs.next(this.behaviorSubjectValue);
  }
}
