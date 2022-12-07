import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isAuthenticated() {
    const token = sessionStorage.getItem("token");

    if (token && token?.length! > 0) {
      return true;
    }

    return false;
  }
}
