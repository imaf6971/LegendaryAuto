import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: any;

  constructor(private appService: AppServiceService) {}

  ngOnInit(): void {
    this.carList = this.appService.carList;
  }

  // products: any;

  // constructor(private appService: AppServiceService) { }

  // ngOnInit(): void {
  //   this.appService.getProducts().subscribe(products => this.products = products);
  // }

}
