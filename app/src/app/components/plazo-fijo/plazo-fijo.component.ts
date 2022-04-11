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
  minDias = 1;
  maxDias = 120;
  minCapital = 1000;
  maxCapital = 100000;
  errorCapital = '';
  errorDias = '';
  simulaciones: Simulacion[];

  constructor(public simulador: SimulacionService) {
    this.simulacion = new Simulacion(this.dias, this.capital, this.tasa);
    this.resultado = this.simulacion.calcularInteres();
    this.simulaciones = [];
  }

  ngOnInit(): void {
  }

  calcularInteres() {
    this.simulacion = new Simulacion(this.dias, this.capital, this.tasa);
    this.resultado = this.simulacion.calcularInteres();
    this.simulador.agregarSimulacion(this.simulacion)
    this.simulaciones = this.simulador.obtenerSimulaciones();

  }

  incrCap(incr: number) {
    if (this.capital < this.maxCapital) {
      this.capital += incr;
      this.calcularInteres()
      this.errorCapital = '';
    } else {
      this.errorCapital = 'Máximo alcanzado.';
    }
  }

  incrDias(incr: number) {
    if (this.dias < this.maxDias) {
      this.dias += incr;
      this.calcularInteres();
      this.errorDias = '';
    } else {
      this.errorDias = 'Máximo alcanzado.';
    }

  }

  decrCap(incr: number) {
    if (this.capital > this.minCapital) {
      this.capital -= incr;
      this.calcularInteres();
      this.errorCapital = '';
    } else {
      this.errorCapital = 'Mínimo alcanzado.';
    }
  }

  decrDias(incr: number) {
    if (this.dias > this.minDias) {
      this.dias -= incr;
      this.calcularInteres();
      this.errorDias = '';
    } else {
      this.errorDias = 'Mínimo alcanzado.';
    }
  }

}
