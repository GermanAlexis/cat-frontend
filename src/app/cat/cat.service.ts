import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBreed } from './interfaces/cat.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  constructor(private httpService: HttpClient) {}

  getBreeds() {
    return this.httpService.get<IBreed[]>('http://localhost:3001/cat/all');
  }

  search(name: string) {
    const paraValue = name.trim().toLocaleLowerCase();
    if (!paraValue) return this.getBreeds();

    const params = new HttpParams().append('name', paraValue);

    return this.httpService.get<IBreed[]>(
      'http://localhost:3001/cat/cat/search',
      {
        params,
      }
    );
  }
}
