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
      description: 'Porsche Taycan — полностью электрическое 4-дверное купе, разработанное компанией Porsche. Концепт-кар впервые был показан на Международном автомобильном салоне во Франкфурте в 2015 году. Это первый полноценный электромобиль Porsche',
      price: 150000,
      year: 2021,
      body: 'Седан',
      color: 'Красный',
      power: 571,
      photo: '../../assets/taycan/taycan.jpg'
    },
    {
      id: 2,
      manufacturer: 'Porsche',
      model: '911 Turbo',
      description: 'Porsche 911 — гребанная легенда. Одна из старейших моделей немецкого производителя. На 911 гоняли крутые ребята, начиная от Пабло Эскобара, заканчивая Джонни Сильверхендом',
      price: 170000,
      year: 2020,
      body: 'Купе',
      color: 'Синий',
      power: 580,
      photo: '../../assets/911.jpg'
    },
    {
      id: 3,
      manufacturer: 'Porsche',
      model: 'Cayman',
      description: 'Porsche Cayman — идейный наследник Boxter и одна из самых блистательных Porsche за все время. Да, она не такая быстрая, как другие модели марки, но взгляды прохожих на ней вы будете ловить, как ни на одной другой',
      price: 100000,
      year: 2013,
      body: 'Купе',
      color: 'Желтый',
      power: 275,
      photo: '../../assets/cayman.jpg'
    }
  ]

  // constructor(private http: HttpClient) {}

  // public getProducts() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }
}
