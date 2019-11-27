import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-form-view",
  templateUrl: "./form-view.component.html",
  styleUrls: ["./form-view.component.css"]
})
export class FormViewComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private actRoute: ActivatedRoute
  ) {}
  forms: any;
  ngOnInit() {
    let id = this.actRoute.snapshot.params["id"];

    this.commonService.getFormById(id).subscribe(res => {
      this.forms = res;
      console.log(res);
    });
  }
}
