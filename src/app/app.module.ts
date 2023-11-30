import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReteModule } from "rete-angular-plugin/15";

import { AppComponent } from "./app.component";
import { CustomNodeComponent } from "./custom.node";

@NgModule({
  declarations: [AppComponent, CustomNodeComponent],
  imports: [BrowserModule, CommonModule, ReteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
