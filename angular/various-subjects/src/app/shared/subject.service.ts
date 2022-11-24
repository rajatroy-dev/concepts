import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

/**
 * 1. Remembers only the last value
 * 2. No need to specify any initial value
 */
@Injectable()
export class SubjectService {
  subjectValue!: number;
  _subjectValueBs = new Subject<number>();

  constructor() {
    this._subjectValueBs.next(0);
  }

  next(val: number) {
    this._subjectValueBs.next(val);
  }
}
