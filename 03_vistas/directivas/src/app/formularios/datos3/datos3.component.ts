import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datos3',
  templateUrl: './datos3.component.html',
  styleUrls: ['./datos3.component.css']
})
export class Datos3Component implements OnInit {

  @ViewChild('inputNombre') eNombre: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  btnBorrar() {
    console.log(this.eNombre);
  }
}
