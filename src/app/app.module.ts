import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {UiModule} from './ui.module';
import {TableComponent} from './table/table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, UiModule ],
  declarations: [ AppComponent, TableComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
