import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormListComponent } from "./views/form-list/form-list.component";
import { NavbarComponent } from "./views/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormViewComponent } from "./views/form-view/form-view.component";
import { LoginComponent } from "./views/login/login.component";
import { AuthGuard } from "./core/guard/auth.guard";
import { TokenInterceptorService } from "./core/services/token-interceptor.service";
import { PageEnderComponent } from "./views/page-ender/page-ender.component";
import { ContactformComponent } from "./views/contactform/contactform.component";

import { MaterialModule } from "./material/material.module";
import { DialogComponent } from "./views/dialog/dialog.component";
import { FooterComponent } from "./views/footer/footer.component";
import { ContactForm2Component } from "./views/contact-form2/contact-form2.component";
@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    NavbarComponent,
    FormViewComponent,
    LoginComponent,
    PageEnderComponent,
    ContactformComponent,
    DialogComponent,
    FooterComponent,
    ContactForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
