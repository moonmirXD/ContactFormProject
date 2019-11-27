import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "../services/common.service";
import { Router } from "@angular/router";
import { MatTableDataSource, MatPaginator, MatDialog } from "@angular/material";

@Component({
  selector: "app-form-list",
  templateUrl: "./form-list.component.html",
  styleUrls: ["./form-list.component.css"]
})
export class FormListComponent implements OnInit {
  forms: any;
  message: string;
  haha: any;
  displayedColumns: string[] = ["_id", "name", "weight", "symbol"];
  dataSource: any;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.commonService.getForm().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
      console.log("data sauce" + this.dataSource);
      this.forms = res;
      console.log(res);
      this.dataSource.paginator = this.paginator;
    });
  }
}
