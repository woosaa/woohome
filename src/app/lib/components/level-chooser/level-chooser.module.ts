import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { LevelChooserComponent } from "./level-chooser.component";

@NgModule({
  imports: [SharedModule],
  declarations: [LevelChooserComponent],
  exports: [LevelChooserComponent]
})
export class LevelChooserModule {}
