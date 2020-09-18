import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToolbarModule } from '../components/toolbar/toolbar.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ToolbarModule],  
  exports: [CommonModule, MaterialModule, ToolbarModule]
})
export class SharedModule {}