import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarModule } from './lib/components/toolbar/toolbar.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToolbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
