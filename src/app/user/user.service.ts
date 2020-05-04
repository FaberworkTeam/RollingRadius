import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { filter } from "rxjs/operators";

import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { User } from "./user";

@Injectable()
export class UserService {
  private apiServer = "http://35.233.188.239:6042";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    })
  };
  constructor(private httpClient: HttpClient) {}

  create(user): Observable<User> {
    return this.httpClient
      .post<User>(
        this.apiServer + "/users/",
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  getById(id): Observable<User> {
    return this.httpClient
      .get<User>(this.apiServer + "/users/" + id)
      .pipe(catchError(this.errorHandler));
  }

  getAll(): Observable<User[]> {
    console.log("get all called");
    return this.httpClient
      .get<User[]>(this.apiServer + "/users")
      .pipe(catchError(this.errorHandler));
  }

  update(id, user): Observable<User> {
    return this.httpClient
      .put<User>(
        this.apiServer + "/users/" + id,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id) {
    return this.httpClient
      .delete<User>(this.apiServer + "/users/" + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
