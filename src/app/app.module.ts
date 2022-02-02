import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import { AppServiceService } from './app-service.service';
import { CarDetailsComponent } from './car-details/car-details.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:carId', component: CarDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarListComponent,
    CarDetailsComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
