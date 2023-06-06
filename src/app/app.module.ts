import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercice1Component } from './test/exercice1/exercice1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
