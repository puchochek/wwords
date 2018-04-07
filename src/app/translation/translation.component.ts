import { Component, OnInit } from '@angular/core';
import { WwordsServerService } from '../wwords-server.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  translate: any = [];
  timeId: any;
  arr: any;
  loading: boolean = false;
  word: string = '';

  constructor(
    private wwordsServer: WwordsServerService
  ) { }

  ngOnInit() {
  }

  onKey() {
    clearTimeout(this.timeId);
    if (this.word) {
      this.timeId = setTimeout(() => {
        this.loading = true;
        this.wwordsServer.getTranslate(this.word)
          .subscribe(words => {
            this.translate = words;
            this.loading = false;
          });
      }, 2000);
    } else {
      this.translate = [];
    }
  }

  clearInput() {
    this.word = '';
    this.translate = [];
  }

  saveWord() {
    this.wwordsServer.saveWord(this.word, this.translate)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
