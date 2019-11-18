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
  regForm: ContactForm = this.fb.group({
    clientId: ["kamana"],
    fullName: ["asdaszxc"],
    emailAddress: ["asdasdk2l@yahoo.com"],
    company: ["Techcellar"],
    contactNo: ["asdasd"],
    subject: [""],
    promoCode: [""],
    message: ["asdassads"]
  });
  constructor(
    private commonService: CommonService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  data: any;
  ngOnInit() {}
  formCreate(formData) {
    this.commonService.createForm(this.regForm.value).subscribe((res: any) => {
      console.log("hehe:" + JSON.stringify(res));
      alert(JSON.stringify(res.message));
      // this.router.navigate(["page-ender"]);
      console.log(res);
    });
  }
}
