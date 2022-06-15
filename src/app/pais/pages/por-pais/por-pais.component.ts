import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        
      },
      (error) => {
        this.hayError = true;
        console.log('Error');
        console.info(error);
      }
    );
  }
}