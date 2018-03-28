import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { TranslationComponent } from './translation/translation.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
