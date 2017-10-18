import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  constructor() { }

  getLibros(clave: string) {
      return [
        'Angular Basico',
        'Angular Avanzado',
        'Angular Lunar'
      ];
  }
}
