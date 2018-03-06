import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {DataService} from '.././data.service';

@NgModule({
  declarations: [ AppComponent],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
