import { FormListComponent } from "./form-list/form-list.component";
import { FormComponent } from "./form/form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormViewComponent } from "./form-view/form-view.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: "kamana",
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "form-list",
    component: FormListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "form-view/:id",
    component: FormViewComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
