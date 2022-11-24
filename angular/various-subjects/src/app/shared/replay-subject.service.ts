import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs";

/**
 * 1. Remembers all the previous values (configurable)
 * 2. No need to specify any initial value
 */
@Injectable()
export class ReplaySubjectService {
  replaySubjectValue!: number;
  _replaySubjectValueBs = new ReplaySubject<number>();
  // _replaySubjectValueBs = new ReplaySubject<number>(2); // only remember the last two values

  constructor() {
    this._replaySubjectValueBs.next(0);
  }

  next(val: number) {
    this._replaySubjectValueBs.next(val);
  }
}
