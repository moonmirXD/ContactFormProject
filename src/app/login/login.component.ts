import { Component, OnInit } from "@angular/core";
// import { AuthService } from "../../core/services/auth.service";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    // private authService: AuthService,
    private fb: FormBuilder,
    private _router: Router
  ) {}
  loginFormData = this.fb.group({
    email: [""],
    password: [""]
  });
  ngOnInit() {}

  loginUser(frmObject) {
    this.authService
      .login(this.loginFormData.getRawValue())
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/"]);
      });
  }
}
