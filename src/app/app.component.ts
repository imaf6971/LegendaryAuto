import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  constructor(private route: Router) {}

  routeStatus: string;

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeStatus = (event as NavigationStart).url;        
      }
    })        
  }
}
