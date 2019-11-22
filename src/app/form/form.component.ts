import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../services/common.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { ContactForm } from "../contact-form";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit() {}
  ContactForm = this.fb.group({
    clientId: ["sample"],
    fullName: ["", Validators.required],
    emailAddress: ["", Validators.required],
    company: ["", Validators.required],
    contactNo: ["", Validators.required],
    subject: ["", Validators.required],
    promoCode: ["", Validators.required],
    message: ["", Validators.required]
  });

  formCreate(formData) {
    this.commonService
      .createForm(this.ContactForm.value)
      .subscribe((res: any) => {
        console.log("hehe:" + JSON.stringify(res));
        alert(JSON.stringify(res.message));
        console.log(res);
      });
  }
}
