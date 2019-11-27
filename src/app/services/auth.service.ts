import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  urlLogin = "http://localhost:3333/user/login"; //URL for LOGIN
  constructor(private http: HttpClient, private router: Router) {}

  login(user) {
    return this.http.post(this.urlLogin, user);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  loggedOut() {
    localStorage.removeItem("token");
    return this.router.navigate(["/login"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
