import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from './interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpClient) {}

  async login({ email, password }: Ilogin) {
    return this.httpService.post('', { email, password });
  }
}
