import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Legendary Auto'
  slogan = 'Управляй мечтой'
  imgUrl = 'https://www.disgamovil.com/images/slide5.jpg'

  setBackgroundImage() {
    return 'url("' + this.imgUrl + '")'
  }
}
