import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wwordsServer = 'https://wwords-server.herokuapp.com/translate?word=';
  // wwordsServer = 'http://localhost:3000/translate?word=';
  translate = 'any';
  constructor(private httpClient: HttpClient){}
  onKey(event: any) { // without type info
    this.httpClient.get(this.wwordsServer + event.target.value, {
      withCredentials: true
    })
      .subscribe(res => {
        this.translate = JSON.parse(JSON.stringify(res)).word;
      },
      err => {
        console.log('err: ', err);
      });
   
  }
}
