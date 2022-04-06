export class Simulacion {
    dias: number;
    capital: number;
    tasa: number;
    interes: number;
    
    constructor(dias: number, capital: number, tasa: number) {
        this.dias = dias;
        this.capital = capital;
        this.tasa = tasa;
        this.interes = 0;
    }

    calcularInteres() {
        this.interes = (this.capital * this.dias * this.tasa) / 36500;
        return this.interes;
    }
}