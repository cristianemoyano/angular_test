import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  simulacionForm: FormGroup;

  constructor(public simulador: SimulacionService, private fb: FormBuilder) {
    this.simulacion = new Simulacion(this.dias, this.capital, this.tasa);
    this.resultado = this.simulacion.calcularInteres();
    this.simulaciones = [];
    this.simulacionForm = this.crearFormulario();
    this.setForm();
  }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup{
    return this.fb.group({
      dias: ['',[Validators.required, Validators.min(30)]],
      capital: ['', [Validators.required, Validators.min(1000)]]
    });
  }

  calcularInteres() {
    this.simulacion = new Simulacion(this.dias, this.capital, this.tasa);
    this.resultado = this.simulacion.calcularInteres();
    this.agregarSimulacion();
  }

  public agregarSimulacion() {
    this.simulador.agregarSimulacion(this.simulacion);
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

  setForm(){
    this.simulacionForm.controls['dias'].setValue(this.dias);
    this.simulacionForm.controls['capital'].setValue(this.capital);
  }

  marcarFormulario(){
    this.simulacionForm.controls['capital'].markAsTouched();
    this.simulacionForm.controls['dias'].markAsTouched();
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
