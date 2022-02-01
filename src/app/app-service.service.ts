import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
