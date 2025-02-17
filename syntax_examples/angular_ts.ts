import { Component } from "@angular/core";

type CustomType = "option1" | "option2" | "option3";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Angular TypeScript Example";
  countStart: number = 0;
  complexData: { key1: string; key2: number } = { key1: "value1", key2: 42 };
  customType: CustomType = "option1";

  count: number = this.countStart;
  message: string = "Click the button to start counting.";

  handleClick(): void {
    this.count += 1;
    this.message = `You clicked the button ${this.count} times.`;
  }
}
