import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarModule } from './lib/components/toolbar/toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LevelChooserComponent } from './lib/components/level-chooser/level-chooser.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ToolbarModule ],
  declarations: [ AppComponent, LevelChooserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
