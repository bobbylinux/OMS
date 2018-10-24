import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogged:boolean = false;
  
  constructor() { }

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    console.log("this.isUserLogged",this.isUserLogged);
    return this.isUserLogged;
  }

  signIn(email: string, password: string) {

    localStorage.setItem("token", email);
    return true;
  }

  signUp(username: string, email: string, password: string) {
  }

  logout() {
    localStorage.removeItem('token');
    this.isUserLogged = false;
  }
}
