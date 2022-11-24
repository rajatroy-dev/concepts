import { Component } from '@angular/core';
import { BehaviorSubjectService } from '../shared/behavior-subject.service';
import { ReplaySubjectService } from '../shared/replay-subject.service';
import { SubjectService } from '../shared/subject.service';

@Component({
  selector: 'app-apprehension',
  templateUrl: './apprehension.component.html',
  styleUrls: ['./apprehension.component.scss']
})
export class ApprehensionComponent {
  constructor(private subject: SubjectService,
    private replaySubjectService: ReplaySubjectService,
    private behaviorSubjectService: BehaviorSubjectService) {

  }

  handleClick() {
    // Subject
    this.subject._subjectValueBs.subscribe(x => console.log("Subject 1st Subscription : " + x));
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);

    this.subject._subjectValueBs.subscribe(x => console.log("Subject 2nd Subscription : " + x));
    this.subject.next(4);

    // Replay Subject
    this.replaySubjectService._replaySubjectValueBs.subscribe(x => console.log("Replay Subject 1st Subscription : " + x));
    this.replaySubjectService.next(1);
    this.replaySubjectService.next(2);
    this.replaySubjectService.next(3);

    this.replaySubjectService._replaySubjectValueBs.subscribe(x => console.log("Replay Subject 2nd Subscription : " + x));
    this.replaySubjectService.next(4);

    // Behavior Subject
    this.behaviorSubjectService._behaviorSubjectValueBs.subscribe(x => console.log("Behavior Subject 1st Subscription : " + x));
    this.behaviorSubjectService.next(1);
    this.behaviorSubjectService.next(2);
    this.behaviorSubjectService.next(3);

    this.behaviorSubjectService._behaviorSubjectValueBs.subscribe(x => console.log("Behavior Subject 2nd Subscription : " + x));
    this.behaviorSubjectService.next(4);
  }
}
