import { Component, OnInit } from '@angular/core';
import { Infraestructura, ServiceInfraestructuraService } from './service-infraestructura.service';

@Component({
  selector: 'app-infraestructura',
  templateUrl: './infraestructura.component.html',
  styleUrls: ['./infraestructura.component.css']
})
export class InfraestructuraComponent implements OnInit {

  infraestructuras: Infraestructura[] = [];

  constructor( private _infraService: ServiceInfraestructuraService) { }

  ngOnInit(): void {
    this.infraestructuras = this._infraService.getInfra();
    console.log(this.infraestructuras);
  }

}
