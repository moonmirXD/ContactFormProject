import { FormListComponent } from "./views/form-list/form-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormViewComponent } from "./views/form-view/form-view.component";
import { LoginComponent } from "./views/login/login.component";
import { AuthGuard } from "./core/guard/auth.guard";
import { PageEnderComponent } from "./views/page-ender/page-ender.component";
import { ContactformComponent } from "./views/contactform/contactform.component";
import { ContactForm2Component } from "./views/contact-form2/contact-form2.component";

const routes: Routes = [
  {
    path: "contactform",
    component: ContactformComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "form-list",
    component: FormListComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "form-view/:id",
    component: FormViewComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "page-ender",
    component: PageEnderComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "",
    component: ContactForm2Component
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
