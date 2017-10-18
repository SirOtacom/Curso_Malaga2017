import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from './datos/datos.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DatosComponent,
    PadreComponent,
    HijoComponent
    ],
  exports: [
    DatosComponent,
    PadreComponent,
    HijoComponent
    ]
})
export class FormulariosModule { }
