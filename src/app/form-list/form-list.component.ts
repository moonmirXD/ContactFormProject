import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-list",
  templateUrl: "./form-list.component.html",
  styleUrls: ["./form-list.component.css"]
})
export class FormListComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router) {}
  forms: any;
  message: string;

  ngOnInit() {
    this.commonService.getForm().subscribe(res => {
      this.forms = res;
      console.log(res);
    });
  }
}
