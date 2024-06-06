import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin, IRegister } from './interfaces/login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpClient) {}

  async login({ email, password }: Ilogin) {
    return this.httpService.post<{ token: string }>(
      'http://localhost:3001/auth/login',
      {
        email,
        password,
      }
    );
  }

  async register({ email, password, name }: IRegister) {
    return this.httpService.post('http://localhost:3001/auth/register', {
      email,
      password,
      name,
    });
  }

  async verifyToken(token: string) {
    return this.httpService.get('http://localhost:3001/auth/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
