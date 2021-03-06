import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "../../core/services/common.service";
import { MatTableDataSource, MatPaginator } from "@angular/material";

@Component({
  selector: "app-form-list",
  templateUrl: "./form-list.component.html",
  styleUrls: ["./form-list.component.css"]
})
export class FormListComponent implements OnInit {
  forms: any;
  err_message: string;
  displayedColumns: string[] = ["_id", "name", "email", "view"];
  dataSource: any;

  constructor(private commonService: CommonService) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.commonService.getForm().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.forms = res;
        console.log(res);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        this.err_message = "There is a problem in service. Try again sometime.";
        console.log("There is a problem in service. Try again sometime.");
      }
    );
  }
}
