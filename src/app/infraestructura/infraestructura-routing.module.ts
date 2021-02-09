import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfraestructuraComponent } from './infraestructura.component';

const routes: Routes = [{ path: '', component: InfraestructuraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfraestructuraRoutingModule { }
