import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training -demo !!!';
  
  user : User;  

  constructor(){
    this.user = new User();
    this.user.name = 'Foo baar';
    this.user.designation = 'software developer';
    this.user.address = 'City Street ';
    this.user.phone = [
      '123-123-123',
      '456-456-456'
    ];

  }
}
