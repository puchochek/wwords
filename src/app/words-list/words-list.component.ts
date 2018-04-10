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


  constructor(
    private wwordsServer: WwordsServerService
  ) {
    this.getWordsList();
  }

  ngOnInit() {
  }

  getWordsList() {
    this.wwordsServer.getWordsList()
      .subscribe((list: Array<any>) => {
      this.userList = list['words'];
      console.log(111, this.userList);
    })
  }

}
