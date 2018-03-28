import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  wwordsServer = 'https://wwords-server.herokuapp.com/translate?word=';
  // wwordsServer = 'http://localhost:3000/translate?word=';
  translate: string = '';
  timeId: any;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.wwordsServer + 'wake up', { withCredentials: true })
      .subscribe();
  }

  ngOnInit() {
  }

  onKey(event: any) {
    clearTimeout(this.timeId);
    if (event.target.value) {
      this.timeId = setTimeout(() => {
        this.getTranslate(event.target.value);
      }, 1000);
    } else {
      this.translate = '';
    }
  }

  getTranslate(word) {
    this.httpClient.get(this.wwordsServer + word, { withCredentials: true })
      .subscribe((res: any) => {
        this.translate = res.words;
      }, err => {
        console.log('err: ', err);
      });
  }
}
