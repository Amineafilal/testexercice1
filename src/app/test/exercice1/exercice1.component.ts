import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
interface CoupureMonnaie {
  valeur: number;
}

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {
  prixTotal: number = 0;
  montantPaye: number = 0;
  renduMonnaie: CoupureMonnaie[] = [];

  calculerRenduMonnaie(): void {
    this.renduMonnaie = [];

    let monnaieRendue: number = this.montantPaye - this.prixTotal;

    if (monnaieRendue < 0) {
      alert("La somme payée est insuffisante.");
      return;
    }

    const coupures: number[] = [10, 5, 1];  // Valeurs des coupures de monnaie disponibles
    coupures.forEach(coupure => {
      const nombreCoupures: number = Math.floor(monnaieRendue / coupure);
      monnaieRendue %= coupure;

      if (nombreCoupures > 0) {
        this.renduMonnaie.push({ valeur: coupure });
      }
    });
  }
}
