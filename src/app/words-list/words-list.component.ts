import { Component, OnInit } from '@angular/core';
import { WwordsServerService } from '../wwords-server.service';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})

export class WordsListComponent implements OnInit {
  userList: Array<any>;
  showCategoryWords: any = {};
  categoryList: any;
  loading: boolean;


  constructor(
    private wwordsServer: WwordsServerService
  ) {
    this.getWordsList();
    this.wwordsServer.saveWordEvent //Even emitter for adding new words from translation component
      .subscribe(() => {
        this.getWordsList();
      });
  }

  ngOnInit() {
  }

  showWordsButton(category) {
    this.showCategoryWords[category] = !this.showCategoryWords[category];
  }


  getWordsList() {
    this.loading = true;
    this.wwordsServer.getWordsList()
      .subscribe((list: { words: Array<any> }) => {
        this.loading = false;
        if (!list) return;
        this.userList = list.words;
        this.categoryList = this.parseCategories(list.words);
      })
  }

  parseCategories(words) { //Removes the same category elements
    if (!words) return [];

    const categoryObject = {};
    words.forEach(word => {
      categoryObject[word.category] = true;
    });

    return Object.keys(categoryObject);
  }
}