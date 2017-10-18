import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PadreComponent,
    HijoComponent
    ],
  exports: [
    PadreComponent,
    HijoComponent
    ]
})
export class FormulariosModule { }
