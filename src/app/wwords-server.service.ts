import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WwordsServerService {
  wwordsServer = 'https://wwords-server.herokuapp.com/translate?word=';
  // wwordsServer = 'http://localhost:3000/translate?word=';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.wwordsServer + 'wake up', { withCredentials: true })
      .subscribe();
  }

  getTranslate(word) {
    return this.httpClient.get(this.wwordsServer + word, { withCredentials: true })
      .map((res: any) => {
        return res.words;
      }, err => {
        console.log('err: ', err);
      });
  }
}
