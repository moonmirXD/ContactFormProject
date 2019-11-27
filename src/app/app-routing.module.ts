import { FormListComponent } from "./form-list/form-list.component";
import { FormComponent } from "./form/form.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormViewComponent } from "./form-view/form-view.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guard/auth.guard";
import { HomeComponent } from "./home/home.component";
import { PageEnderComponent } from "./page-ender/page-ender.component";
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
    path: "",
    component: FormComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "page-ender",
    component: PageEnderComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "contactform2",
    component: ContactformComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "contactform3",
    component: ContactForm2Component
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
