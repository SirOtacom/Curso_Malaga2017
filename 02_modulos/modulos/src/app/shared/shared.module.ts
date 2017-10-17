import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

import {PieComponent  } from './pie/pie.component';
import {CabezaComponent  } from './cabeza/cabeza.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LogoComponent, PieComponent, CabezaComponent],
  declarations: [LogoComponent, PieComponent, CabezaComponent]
})
export class SharedModule { }
