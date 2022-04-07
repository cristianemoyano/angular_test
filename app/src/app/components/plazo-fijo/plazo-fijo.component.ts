import { Component, OnInit } from '@angular/core';
import { Simulacion } from 'src/app/models/simulacion.model';
import { SimulacionService } from 'src/app/providers/simulacion.service';

@Component({
  selector: 'app-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.css']
})
export class PlazoFijoComponent implements OnInit {
  dias = 30;
  capital = 1000;
  resultado: number;
  simulacion: Simulacion;
  tasa = 41;

  constructor(public simuladores: SimulacionService) { 
    this.simulacion = new Simulacion(this.dias, this.capital, this.tasa);
    this.simulacion.calcularInteres();
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  calcularInteres(){
    this.simulacion = new Simulacion(this.dias, this.capital, this.tasa);
    this.resultado = this.simulacion.calcularInteres();
    
  }

  incrCap(incr: number) {
    this.capital += incr;
    this.calcularInteres()
  }

  incrDias(incr: number) {
    this.dias += incr;
    this.calcularInteres()
  }

}
