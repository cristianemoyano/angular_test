import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { ComponentsModule } from './components/components.module';
import { SimulacionService } from './providers/simulacion.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SimulacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
