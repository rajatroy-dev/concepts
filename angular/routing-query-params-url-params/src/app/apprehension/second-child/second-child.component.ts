import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent {
  public id!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params['id'])
    ).subscribe(params => this.id = params['id']);
  }
}
