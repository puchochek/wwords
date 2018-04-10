import { Component, OnInit } from '@angular/core';
import { WwordsServerService } from '../wwords-server.service';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})

export class WordsListComponent implements OnInit {
  words: any;
  userList: Array<any>;
  showWords: boolean = false;
  

  constructor(
    private wwordsServer: WwordsServerService
  ) {
    this.getWordsList();
  }

  ngOnInit() {
  }

  showWordsButton() {
    this.showWords = !this.showWords;
  }


  getWordsList() {
    this.wwordsServer.getWordsList()
      .subscribe((list: Array<any>) => {
        this.userList = list['words'];
        console.log(111, this.userList);
      })
  }

}
