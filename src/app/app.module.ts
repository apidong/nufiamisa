import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableLoadingComponent } from './shareds/templates/table-loading/table-loading.component';
import { LoadingspinnerComponent } from './shareds/templates/loadingspinner/loadingspinner.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APIInterceptor } from './config/config';
import { P404Component } from './views/errors/p404/p404.component';
import { P500Component } from './views/errors/p500/p500.component';
import { DefaultLayoutComponent } from './containers';

@NgModule({
  declarations: [
    AppComponent,
    TableLoadingComponent,
    LoadingspinnerComponent,
    P404Component,
    P500Component,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
