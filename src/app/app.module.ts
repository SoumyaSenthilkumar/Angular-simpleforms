import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//this built-in module shipping with Angular includes a lot of forms related functionalities.
//import { HttpModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
