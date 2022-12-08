import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'route-guard';
  isLoggedIn!: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService._isLoggedInBs.subscribe(x => this.isLoggedIn = x);
  }
}
