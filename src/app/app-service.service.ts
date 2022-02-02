import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public carList = [
    {
      id: 1,
      manufacturer: 'Porsche',
      model: 'Taycan',
      photo: '../../assets/taycan.jpg'
    },
    {
      id: 2,
      manufacturer: 'Porsche',
      model: '911',
      photo: '../../assets/911.jpg'
    },
    {
      id: 3,
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
