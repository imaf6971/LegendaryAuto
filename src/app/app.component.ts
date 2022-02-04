import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  constructor(private route: Router, private appService: AppServiceService) {}

  routeStatus: string;

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeStatus = (event as NavigationStart).url;        
      }
    })        

    this.appService.sortImages();
  }
}
