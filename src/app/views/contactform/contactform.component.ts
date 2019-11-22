import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ContactForm } from "src/app/contact-form";
import { CommonService } from "src/app/services/common.service";
import {
  MatDialogModule,
  MatDialog,
  MatDialogConfig
} from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-contactform",
  templateUrl: "./contactform.component.html",
  styleUrls: ["./contactform.component.css"]
})
export class ContactformComponent implements OnInit {
  ContactForm: ContactForm;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  step = 0;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.ContactForm = this.formBuilder.group({
      clientId: ["asd"],
      fullName: ["Ryan Arq"],
      emailAddress: ["arquza@yahoo.com"],
      company: ["Tech"],
      contactNo: ["123123"],
      subject: [],
      message: ["sdasd"]
    });
  }
  onSubmit() {
    // console.log("submitted");
    console.log("this.ContactForm.value:" + this.ContactForm.value);
    console.log("this.ContactForm:" + this.ContactForm);

    this.commonService
      .createForm(this.ContactForm.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status === 404) {
          alert("Error!");
        } else {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.width = "30%";
          dialogConfig.height = "30%";
          this.dialog.open(DialogComponent, {
            // height: '400px',
            // width: '600px',
          });
        }
      });
    // this.ContactForm.reset();
  }
  onReset() {
    this.ContactForm.reset();
  }
}
