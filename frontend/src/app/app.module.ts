import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeadingComponent } from './hp-components/heading/heading.component';
import { ParagraphComponent } from './hp-components/paragraph/paragraph.component';
import { ExampleComponent } from './hp-components/example/example.component';
import { ResultComponent } from './hp-components/result/result.component';
import { DarkModeButtonComponent } from './hp-components/dark-mode-button/dark-mode-button.component';
import { FormComponent } from './hp-components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './hp-components/loading/loading.component';
import { HistoryComponent } from './hp-components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeadingComponent,
    ParagraphComponent,
    ExampleComponent,
    ResultComponent,
    DarkModeButtonComponent,
    FormComponent,
    LoadingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
