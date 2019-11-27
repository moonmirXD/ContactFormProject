import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormListComponent } from "./form-list/form-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormViewComponent } from "./form-view/form-view.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guard/auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { HomeComponent } from "./home/home.component";
import { PageEnderComponent } from "./page-ender/page-ender.component";
import { ContactformComponent } from "./views/contactform/contactform.component";

import { MaterialModule } from "./material/material.module";
import { DialogComponent } from "./views/dialog/dialog.component";
import { ModalviewComponent } from './views/modalview/modalview.component';
import { FooterComponent } from './views/footer/footer.component';
import { ContactForm2Component } from './views/contact-form2/contact-form2.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormListComponent,
    NavbarComponent,
    FormViewComponent,
    LoginComponent,
    HomeComponent,
    PageEnderComponent,
    ContactformComponent,
    DialogComponent,
    ModalviewComponent,
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
