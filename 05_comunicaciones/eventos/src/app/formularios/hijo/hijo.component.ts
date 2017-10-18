import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombre: string;
  @Output() evento: EventEmitter<string> = new EventEmitter;

  nombreElegido: string;

  constructor() { }

  ngOnInit() {
  }

  contestar() {
    this.nombre = '';
    this.evento.emit(this.nombreElegido);
  }
}
