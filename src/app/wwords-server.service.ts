import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

import 'rxjs/add/operator/map';

let accessToken; 

@Injectable()
export class WwordsServerService {
  wwordsServer = 'https://wwords-server.herokuapp.com/';
  // wwordsServer = 'http://localhost:3000/';
  options = {
    withCredentials: true
  };
  public saveWordEvent: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) {//*Wake up the app
    const url = this.wwordsServer + 'translate?word=' + 'wake up';
    
    this.httpClient.get(url, this.options)
      .subscribe();
  }

  getTranslate(word) {//*Make request to Server
    const url = this.wwordsServer + 'translate?word=' + word;
    
    return this.httpClient.get(url, this.options);
  }

  saveWord(word, translation, category) {//*Make request for saving word
    const url = this.wwordsServer + 'words/add';
    const body = {
      word: word,
      translation: translation,
      category: category,
      token: accessToken
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    
    return this.httpClient.post(url, body, this.options);
  }

  getWordsList() {
    const url = this.wwordsServer + 'words/get' + '?token=' + accessToken;
    return this.httpClient.get(url, this.options);
  }

  setAccessToken(token) {
    accessToken = token;
  }
}
