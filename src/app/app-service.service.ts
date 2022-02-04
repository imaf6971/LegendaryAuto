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
      price: 180000,
      year: 2021,
      body: 'Седан',
      color: 'Красный',
      power: 571,
      photos: [
        '../../assets/taycan/taycan.jpg',
        '../../assets/taycan/taycan-details1.jpg',
        '../../assets/taycan/taycan-details2.jpg',
        '../../assets/taycan/taycan-details3.jpg',
        '../../assets/taycan/taycan-details4.jpg'
      ]
    },
    {
      id: 2,
      manufacturer: 'Porsche',
      model: '911 Turbo',
      description: 'Porsche 911 — гребанная легенда. Одна из старейших моделей немецкого производителя. На 911 гоняли крутые ребята, начиная от Пабло Эскобара, заканчивая Джонни Сильверхендом',
      price: 150000,
      year: 2020,
      body: 'Купе',
      color: 'Синий',
      power: 580,
      photos: [
        '../../assets/911/911.jpg',
        '../../assets/911/911-details1.jpg',
        '../../assets/911/911-details2.jpg',
        '../../assets/911/911-details3.jpg',
        '../../assets/911/911-details4.jpg'
      ]
    },
    {
      id: 3,
      manufacturer: 'Porsche',
      model: 'Cayman',
      description: 'Porsche Cayman — идейный наследник Boxter и одна из самых блистательных Porsche за все время. Да, она не такая быстрая, как другие модели марки, но взгляды прохожих на ней вы будете ловить, как ни на одной другой',
      price: 120000,
      year: 2019,
      body: 'Купе',
      color: 'Желтый',
      power: 300,
      photos: [
        '../../assets/cayman/cayman.jpg',
        '../../assets/cayman/cayman-details1.jpg',
        '../../assets/cayman/cayman-details2.jpg',
        '../../assets/cayman/cayman-details3.jpg',
        '../../assets/cayman/cayman-details4.jpg'
      ]
    },
    {
      id: 4,
      manufacturer: 'Porsche',
      model: '911 GT3 RS',
      description: 'Porsche 911 GT3 — это мощная омологационная модель спортивного автомобиля Porsche 911 . Это линейка высокопроизводительных моделей, которая началась с 911 Carrera RS 1973 года . GT3 сделал успешную гоночную карьеру в национальных и региональных сериях Porsche Carrera Cup и GT3 Cup Challenge , а также в международном суперкубке Porsche.',
      price: 225000,
      year: 2019,
      body: 'Купе',
      color: 'Серебристый',
      power: 520,
      photos: [
        '../../assets/cayman/cayman.jpg',
        '../../assets/cayman/cayman-details1.jpg',
        '../../assets/cayman/cayman-details2.jpg',
        '../../assets/cayman/cayman-details3.jpg',
        '../../assets/cayman/cayman-details4.jpg'
      ]
    },
    {
      id: 5,
      manufacturer: 'Porsche',
      model: 'Panamera',
      description: 'Porsche Panamera — пятидверный спортивный фастбэк класса Гран Туризмо с переднемоторной компоновкой и полным или задним приводом. Выпуск и продажи автомобиля начались в 2009 году. Автомобиль получил имя Panamera благодаря удачным выступлениям Porsche в гонке Каррера Панамерикана, проходившей в 50-х годах XX века',
      price: 135000,
      year: 2022,
      body: 'Фастбэк',
      color: 'Серый оливковый',
      power: 330,
      photos: [
        '../../assets/cayman/cayman.jpg',
        '../../assets/cayman/cayman-details1.jpg',
        '../../assets/cayman/cayman-details2.jpg',
        '../../assets/cayman/cayman-details3.jpg',
        '../../assets/cayman/cayman-details4.jpg'
      ]
    },
    {
      id: 6,
      manufacturer: 'Porsche',
      model: 'Carrera GT',
      description: 'Porsche Carrera GT — Про эту машину не надо много говорить. Настоящий шедевр, лучший суперкар прошлого десятилетия. Спустя 15 лет Carrera GT не постарела ни на день и по-прежнему выглядит современно, а её результаты на культовых гоночных треках сделали бы честь и современному автомобилю. Её наследником можно считать 918, который объективно лучше во всём, но даже он не внушает тех эмоций, какие в своё время вызывала она, проносясь мимо с невероятным звуком своего V10.',
      price: 280000,
      year: 2003,
      body: 'Тарга',
      color: 'Серебристый',
      power: 603,
      photos: [
        '../../assets/cayman/cayman.jpg',
        '../../assets/cayman/cayman-details1.jpg',
        '../../assets/cayman/cayman-details2.jpg',
        '../../assets/cayman/cayman-details3.jpg',
        '../../assets/cayman/cayman-details4.jpg'
      ]
    },
    {
      id: 7,
      manufacturer: 'Porsche',
      model: '911 GT3',
      description: 'Porsche 911 GT3 — это мощная омологационная модель спортивного автомобиля Porsche 911 . Это линейка высокопроизводительных моделей, которая началась с 911 Carrera RS 1973 года . GT3 сделал успешную гоночную карьеру в национальных и региональных сериях Porsche Carrera Cup и GT3 Cup Challenge , а также в международном суперкубке Porsche.',
      price: 210000,
      year: 2019,
      body: 'Купе',
      color: 'Черный',
      power: 510,
      photos: [
        '../../assets/cayman/cayman.jpg',
        '../../assets/cayman/cayman-details1.jpg',
        '../../assets/cayman/cayman-details2.jpg',
        '../../assets/cayman/cayman-details3.jpg',
        '../../assets/cayman/cayman-details4.jpg'
      ]
    },
    {
      id: 8,
      manufacturer: 'Porsche',
      model: '911 (930)',
      description: 'Porsche 911 — гребанная легенда. Одна из старейших моделей немецкого производителя. На 911 гоняли крутые ребята, начиная от Пабло Эскобара, заканчивая Джонни Сильверхендом',
      price: 175000,
      year: 1976,
      body: 'Купе',
      color: 'Оранжевый',
      power: 260,
      photos: [
        '../../assets/cayman/cayman.jpg',
        '../../assets/cayman/cayman-details1.jpg',
        '../../assets/cayman/cayman-details2.jpg',
        '../../assets/cayman/cayman-details3.jpg',
        '../../assets/cayman/cayman-details4.jpg'
      ]
    },
    {
      id: 9,
      manufacturer: 'Porsche',
      model: 'Taycan',
      description: 'Porsche Taycan — полностью электрическое 4-дверное купе, разработанное компанией Porsche. Концепт-кар впервые был показан на Международном автомобильном салоне во Франкфурте в 2015 году. Это первый полноценный электромобиль Porsche',
      price: 190000,
      year: 2022,
      body: 'Седан',
      color: 'Белый',
      power: 571,
      photos: [
        '../../assets/taycan/taycan.jpg',
        '../../assets/taycan/taycan-details1.jpg',
        '../../assets/taycan/taycan-details2.jpg',
        '../../assets/taycan/taycan-details3.jpg',
        '../../assets/taycan/taycan-details4.jpg'
      ]
    },
  ]
}
