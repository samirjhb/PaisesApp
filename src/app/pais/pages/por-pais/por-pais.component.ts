import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  @Input() paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
 

    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
        // console.log('Error');
        // console.info(error);
      }
    );
  }

  sugerencias(termino:string){
    this.hayError= false;

  }
}
