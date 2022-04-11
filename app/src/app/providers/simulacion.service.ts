import { Injectable } from '@angular/core';
import { Simulacion } from '../models/simulacion.model';

@Injectable({
  providedIn: 'root'
})
export class SimulacionService {

  simulaciones: Simulacion[] = [];

  constructor() { }

  public agregarSimulacion(simulacion: Simulacion) {
    this.simulaciones.push(simulacion);
  }

  public obtenerSimulaciones(): Simulacion[] {
    return this.simulaciones;
  }
}
