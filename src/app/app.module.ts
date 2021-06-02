import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableLoadingComponent } from './shareds/templates/table-loading/table-loading.component';
import { LoadingspinnerComponent } from './shareds/templates/loadingspinner/loadingspinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TableLoadingComponent,
    LoadingspinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
