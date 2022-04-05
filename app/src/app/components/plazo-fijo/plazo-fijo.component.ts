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
  resultado: string;
  simulacion: Simulacion;

  constructor(public simuladores: SimulacionService) { 
    this.resultado = simuladores.prueba();
    this.simulacion = new Simulacion(1000, 30, 41);
  }

  ngOnInit(): void {
  }

}
