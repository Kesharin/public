import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { freeApiservice } from './services/freeapi.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ AppComponent, FooterComponent ],
  imports: [BrowserModule,HttpClientModule,FormsModule],
  providers: [freeApiservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
