import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';

import { WwordsServerService } from './wwords-server.service';
import { WordsListComponent } from './words-list/words-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent,
    WordsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    WwordsServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
