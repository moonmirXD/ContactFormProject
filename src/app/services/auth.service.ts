import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  urlLogin = "http://localhost:3333/user/login";
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post(this.urlLogin, user);
  }
  loggedIn() {
    return !!localStorage.getItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
