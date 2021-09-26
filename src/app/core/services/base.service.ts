import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface DataRequest {
  data: any;
  message: string;
  notifications: any;
  success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  public API_WAP_SERVER = environment.apiUrl;
  public data = {
    data: null,
    message: null,
    notifications: null,
    success: null,
  } as DataRequest;
  options: any;

  constructor(public httpClient: HttpClient) {
    this.headers();
  }

  headers() {
    let headersParams = new HttpHeaders();
    headersParams = headersParams.append('Content-Type', 'application/json');
    this.options = { headers: headersParams };
  }

  getResponse(apiURL: string) {
    return this.httpClient
      .get(`${this.API_WAP_SERVER}${apiURL}`, this.options)
      .pipe(catchError(this.handleError));
  }

  postResponse(apiURL: string) {
    return this.httpClient
      .post(`${this.API_WAP_SERVER}${apiURL}`, this.options)
      .pipe(catchError(this.handleError));
  }

  putResponse(apiURL: string) {
    return this.httpClient
      .put(`${this.API_WAP_SERVER}${apiURL}`, this.options)
      .pipe(catchError(this.handleError));
  }

  deleteResponse(apiURL: string) {
    return this.httpClient
      .delete(`${this.API_WAP_SERVER}${apiURL}`, this.options)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      switch (error.status) {
        case 404:
          errorMessage =
            '[404] O servidor não pode encontrar o recurso solicitado.';
          break;
      }
    } else {
      // Server-side errors
      switch (error.status) {
        case 400:
          if (error.error?.notifications === undefined)
            errorMessage = error.error[0].message ?? '';
          else errorMessage = error.error?.notifications[0].message ?? '';
          break;
        case 500:
          errorMessage =
            error.error?.Message ??
            '[500] O servidor encontrou uma situação com a qual não sabe lidar.';
          break;
        case 503:
          errorMessage =
            '[503] O servidor não está pronto para manipular a requisição.';
          break;
        case 504:
          errorMessage =
            '[504] O servidor esta impossibilitado de completar sua solicitação a tempo.';
          break;
      }
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
