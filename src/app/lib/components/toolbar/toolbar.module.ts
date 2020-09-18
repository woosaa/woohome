import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./toolbar.component";
import { MaterialModule } from "../../shared/material/material.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
