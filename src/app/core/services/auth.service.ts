import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  private readonly API_WAP_SERVER_AUTH = '/api/v1/auth';
  _token: string;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  async getToken(): Promise<boolean> {
    try {
      this._token = Object.getOwnPropertyDescriptor(await this.postResponse(`${this.API_WAP_SERVER_AUTH}?clientToken=${environment.secretKey}`).toPromise(), 'token').value;
      return true;
    }
    catch (exception) {
      return false;
    }
  }
}
