import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training -demo !!!';
  
  user : User;  
  inputText: string = "Intial value";


  constructor(private testService: TestService,private httpClient: HttpClient){
    testService.printToConsole("Got the service");
    this.user = new User();
    this.user.name = 'Foo baar';
    this.user.designation = 'software developer';
    this.user.address = 'City Street ';
    this.user.phone = [
      '123-123-123',
      '456-456-456'
    ];
  }

  ngOnInit(){
      let obseravle = this.httpClient.get('https://api.github.com/users/java-scala-go');
      obseravle.subscribe( (response) => console.log(response));
  }
}
