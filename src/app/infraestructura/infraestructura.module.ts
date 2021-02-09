import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfraestructuraRoutingModule } from './infraestructura-routing.module';
import { InfraestructuraComponent } from './infraestructura.component';


@NgModule({
  declarations: [InfraestructuraComponent],
  imports: [
    CommonModule,
    InfraestructuraRoutingModule
  ]
})
export class InfraestructuraModule { }
