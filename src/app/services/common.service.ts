import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  urlPost = "http://localhost:3333/form/kamana";
  urlGet = "http://localhost:3333/form/admin/inquiries/";

  // private messageSource = new BehaviorSubject<string>("default");
  // currentMessage = this.messageSource.asObservable();

  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }

  constructor(private http: HttpClient) {}

  createForm(form) {
    return this.http.post(this.urlPost, form);
  }
  getForm() {
    return this.http.get(this.urlGet);
  }
  getFormById(id) {
    return this.http.get(this.urlGet + id);
  }
}
