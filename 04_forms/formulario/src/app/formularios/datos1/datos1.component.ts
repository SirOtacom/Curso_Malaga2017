import { Libro, Pais } from '../libro.model';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {

  oLibro: Libro;
  aPaises: Array<Pais>;
  estaEnviado: boolean;
  @ViewChild('myForm')  form: any;

  constructor() { }

  ngOnInit() {

    this.btnBorrar();

    this.aPaises = [
      {codigo: 'ES', nombre: 'España'},
      {codigo: 'FR', nombre: 'Francia'},
      {codigo: 'IT', nombre: 'Italia'}
    ];

    console.log(this.form);

  }

  btnInsert() {
    this.estaEnviado = true;
  }

  btnBorrar() {

    this.oLibro = {
      autor: '',
      titulo: '',
      editorial: '',
      numpag: 0,
      exlibris: false,
      genero: '',
      pais: {codigo: '', nombre: ''}
    };

    this.estaEnviado = false;
  }

}
