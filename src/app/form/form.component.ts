import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../services/common.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  // formData = {
  //   clientId: this.router.url,
  //   fullName: "",
  //   emailAddress: "",
  //   company: "",
  //   contactNo: "",
  //   subject: "",
  //   promoCode: undefined,
  //   message: ""
  // };
  regForm = this.fb.group({
    clientId: ["asd"],
    fullName: [""],
    emailAddress: [""],
    company: [""],
    contactNo: [""],
    subject: [""],
    promoCode: [""],
    message: [""]
  });
  constructor(
    private commonService: CommonService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}
  formCreate(formData) {
    this.commonService
      .createForm(this.regForm.getRawValue())
      .subscribe(data => {
        console.log("Success");
        console.log(data);
        alert("created");
      });
  }
}
