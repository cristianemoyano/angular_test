import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { Simulacion } from '../models/simulacion.model';

@Injectable({
  providedIn: 'root'
})
export class SimulacionService {

  simulaciones: Simulacion[];

  constructor( private db: AngularFireDatabase ) {
    this.simulaciones = [];
  } 

  public agregarSimulacion(simulacion: Simulacion) {
    this.simulaciones.push(simulacion);
    this.setBd();
  }

  setBd() {
    this.db.object('simulaciones/').set(this.simulaciones);
  }

  public obtenerSimulaciones(): Simulacion[] {
    return this.simulaciones;
  }
}
