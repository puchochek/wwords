import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WwordsServerService {
  wwordsServer = 'https://wwords-server.herokuapp.com/';
  // wwordsServer = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {//*Wake up the app
    const url = this.wwordsServer + 'translate?word=' + 'wake up';
    const options = {
      withCredentials: true
    };
    this.httpClient.get(url, options)
      .subscribe();
  }

  getTranslate(word) {//*Make request to Server
    const url = this.wwordsServer + 'translate?word=' + word;
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(url, options);
  }

  saveWord(word, translation, category) {//*Make request for saving word
    const url = this.wwordsServer + 'words/add';
    const body = {
      word: word,
      translation: translation,
      category: category
    };
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const options = {
      withCredentials: true,
      headers: headers
    };
    return this.httpClient.post(url, body, options);
  }

  getWordsList() {
    const url = this.wwordsServer + 'words/get';
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(url, options);
  }
}
