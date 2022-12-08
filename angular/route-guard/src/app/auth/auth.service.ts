import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _isLoggedInBs = new BehaviorSubject<boolean>(false); // has initial value

  constructor() { }

  isAuthenticated() {
    const token = sessionStorage.getItem("token");

    if (token && token?.length! > 0) {
      this._isLoggedInBs.next(true);
      return true;
    }

    this._isLoggedInBs.next(false);
    return false;
  }
}
