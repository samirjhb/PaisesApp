import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  @Input() capital: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe(
      (capital) => {
        console.log(capital);
        this.capital = capital;
      },
      (error) => {
        this.hayError = true;
        this.capital = [];
        // console.log('Error');
        // console.info(error);
      }
    );
  }


}
