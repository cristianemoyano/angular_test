import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { PlazoFijoComponent } from "./plazo-fijo/plazo-fijo.component";

@NgModule({
    declarations: [
      PlazoFijoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        PlazoFijoComponent,
        FormsModule
    ]
  })
export class ComponentsModule { }
