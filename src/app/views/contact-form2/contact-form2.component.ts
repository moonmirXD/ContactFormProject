import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { CommonService } from "src/app/services/common.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-contact-form2",
  templateUrl: "./contact-form2.component.html",
  styleUrls: ["./contact-form2.component.css"]
})
export class ContactForm2Component implements OnInit {
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
  public ContactForm: FormGroup;
  ngOnInit() {
    this.ContactForm = this.formBuilder.group({
      // clientId: ["", Validators.required],
      fullName: ["", Validators.required],
      emailAddress: ["", Validators.required],
      company: ["", Validators.required],
      contactNo: ["", Validators.required],
      subject: [Validators.required],
      message: ["", Validators.required]
    });
  }
  onSubmit() {
    console.log("this.ContactForm.value:" + this.ContactForm.value);
    console.log("this.ContactForm:" + this.ContactForm);

    this.commonService
      .createForm(this.ContactForm.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status === 404) {
          alert(res.message);
        } else {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.width = "30%";
          dialogConfig.height = "30%";
          this.dialog.open(DialogComponent, {});
        }
      });
    // this.ContactForm.reset();
  }
  onReset() {}
}
