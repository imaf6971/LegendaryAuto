import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car: any;

  constructor(
    private appService: AppServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const carIdFromRoute = Number(routeParams.get('carId'));
    
    this.car = this.appService.carList.find(car => car.id === carIdFromRoute);
  }

}
