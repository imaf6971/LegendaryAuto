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
        'https://i.postimg.cc/wT3tKGkn/taycan-details2.jpg',
        'https://i.postimg.cc/m2qPTyXk/taycan-details1.jpg',
        'https://i.postimg.cc/prcphfP0/taycan-details4.jpg',
        'https://i.postimg.cc/50rkwnfT/taycan.jpg',
        'https://i.postimg.cc/tRB1MjFh/taycan-details3.jpg'
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
        'https://i.postimg.cc/C5sZ4Rb8/911-details4.jpg',
        'https://i.postimg.cc/c1R8WbPJ/911-details1.jpg',
        'https://i.postimg.cc/Qt5KH4t0/911-details2.jpg',
        'https://i.postimg.cc/MGdLGzNW/911.jpg',
        'https://i.postimg.cc/Bb0LDTPs/911-details3.jpg'
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
        'https://i.postimg.cc/xC8Ksy62/cayman-details3.jpg',
        'https://i.postimg.cc/V6hX2rhb/cayman-details1.jpg',
        'https://i.postimg.cc/1zJGcYcB/cayman-details2.jpg',
        'https://i.postimg.cc/PqtbDkZN/cayman-details4.jpg',
        'https://i.postimg.cc/4dyS7rRp/cayman.jpg'
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
        'https://i.postimg.cc/X7FnPs7k/gt3rs-details4.jpg',
        'https://i.postimg.cc/bvY8s80m/gt3rs-details1.jpg',
        'https://i.postimg.cc/Z5SJz6Wt/gt3rs.jpg',
        'https://i.postimg.cc/RC2MGk90/gt3rs-details3.jpg',
        'https://i.postimg.cc/nhGpFMms/gt3rs-details2.jpg'
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
        'https://i.postimg.cc/vHwXdvdv/panamera-details2.jpg',
        'https://i.postimg.cc/zDgpMc4B/panamera-details4.jpg',
        'https://i.postimg.cc/C5kNqRbD/panamera-details3.jpg',
        'https://i.postimg.cc/ncK2VQFf/panamera.jpg',
        'https://i.postimg.cc/qvkLNMqh/panamera-details1.jpg'
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
        'https://i.postimg.cc/jSGT49fb/carrera-gt-details2.jpg',
        'https://i.postimg.cc/WbYThtbt/carrera-gt.jpg',
        'https://i.postimg.cc/8zFDWDj4/carrera-gt-details4.jpg',
        'https://i.postimg.cc/Dyw7v1ht/carrera-gt-details3.jpg',
        'https://i.postimg.cc/wBLpfV5s/carrera-gt-details1.jpg'
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
        'https://i.postimg.cc/2y3pznJz/gt3-details4.jpg',
        'https://i.postimg.cc/J0FftGVj/gt3-details3.jpg',
        'https://i.postimg.cc/5NhcVYmV/gt3-details2.jpg',
        'https://i.postimg.cc/fTt4pjmC/gt3.jpg',
        'https://i.postimg.cc/vmyp4Jj2/gt3-details1.jpg'
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
        'https://i.postimg.cc/1RHW5gcF/911-930.jpg',
        'https://i.postimg.cc/DZQxG09t/911-930-details4.jpg',
        'https://i.postimg.cc/QC0S6Pxm/911-930-details2.jpg',
        'https://i.postimg.cc/NFgpkYYL/911-930-details3.jpg',
        'https://i.postimg.cc/Wb15D2XH/911-930-details1.jpg'
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
        'https://i.postimg.cc/SQYyBM0y/taycan2-details3.jpg',
        'https://i.postimg.cc/ZKrJRzK2/taycan2-details2.jpg',
        'https://i.postimg.cc/hPFSctgV/taycan2-details4.jpg',
        'https://i.postimg.cc/zG75Cwhk/taycan2-details1.jpg',
        'https://i.postimg.cc/13ssV78t/taycan2.jpg'
      ]
    }
  ]

  sortImages() {
    for (let car of this.carList) {
      console.log(car.photos);

      let photos = ['', '', '', '', ''];    

      for (let photo of car.photos) {
        if (photo.includes("details")) {
          if (photo.includes("details1")) {
            photos[1] = photo;
          }
          else if (photo.includes("details2")) {
            photos[2] = photo;
          }            
          else if (photo.includes("details3")) {
            photos[3] = photo;
          }            
          else if (photo.includes("details4")) {
            photos[4] = photo;
          }
        }      
        else {
          photos[0] = photo
        }
      }

      car.photos = photos;

      console.log(car.photos);
    }
  }

}
