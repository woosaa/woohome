import { Component, OnInit } from "@angular/core";
import { levelChooserFabAnimations } from "./level-chooser.animations";

@Component({
  selector: "app-level-chooser",
  templateUrl: "./level-chooser.component.html",
  animations: [levelChooserFabAnimations],
  styleUrls: ["./level-chooser.component.scss"]
})
export class LevelChooserComponent {
  fabButtons = [
    {
      icon: "timeline"
    },
    {
      icon: "view_headline"
    },
    {
      icon: "room"
    },
    {
      icon: "lightbulb_outline"
    },
    {
      icon: "lock"
    }
  ];
  buttons = [];
  fabTogglerState = "inactive";

  constructor() {}

  showItems() {
    this.fabTogglerState = "active";
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = "inactive";
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
