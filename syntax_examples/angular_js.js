import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular Example";
  countStart = 0;
  complexData = { key1: "value1", key2: 42 };
  customType = "option1";

  count = this.countStart;
  message = "Click the button to start counting.";

  handleClick() {
    this.count += 1;
    this.message = `You clicked the button ${this.count} times.`;
  }
}
