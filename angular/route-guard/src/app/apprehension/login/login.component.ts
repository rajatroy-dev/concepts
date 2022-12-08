import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }

  handleSubmit() {
    sessionStorage.setItem("token", "authenticated");
    this.router.navigate(['/first-child']);
  }
}
