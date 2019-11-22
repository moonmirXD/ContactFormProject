import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

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
    return this.http
      .post(this.urlPost, form)
      .pipe(retry(1), catchError(this.handleError));
  }
  getForm() {
    return this.http.get(this.urlGet);
  }
  getFormById(id) {
    return this.http.get(this.urlGet + id);
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
