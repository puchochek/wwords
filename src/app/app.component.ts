import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// wwordsServer = 'https://wwords-server.herokuapp.com/translate?word=word';
wwordsServer = 'http://localhost:3000/translate?word=word';
  translate = 'any';
  constructor(private httpClient: HttpClient){}
  onKey(event: any) { // without type info
    this.httpClient.get(this.wwordsServer)
      .subscribe(res => {
        console.log(res)
      });
    this.translate = event.target.value;
  }
}
