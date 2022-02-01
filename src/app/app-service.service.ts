import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public carList = [
    {
      manufacturer: 'Porsche',
      model: 'Taycan',
      photo: '../../assets/taycan.jpg'
    },
    {
      manufacturer: 'Porsche',
      model: '911',
      photo: '../../assets/911.jpg'
    },
    {
      manufacturer: 'Porsche',
      model: 'Cayman',
      photo: '../../assets/cayman.jpg'
    }
  ]

  // constructor(private http: HttpClient) {}

  // public getProducts() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }
}
