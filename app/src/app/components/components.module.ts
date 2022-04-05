import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PlazoFijoComponent } from "./plazo-fijo/plazo-fijo.component";

@NgModule({
    declarations: [
      PlazoFijoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PlazoFijoComponent
    ]
  })
export class ComponentsModule { }
