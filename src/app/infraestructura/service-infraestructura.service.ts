import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceInfraestructuraService {

  private infraestructura:Infraestructura[] = [
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/1.jpg"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/2.jpg"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/3.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/4.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/5.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/6.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/7.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/8.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/9.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/10.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/11.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/12.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/13.png"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/14.jpg"
    },
    {
    nombre: "Aqui el nombre",
    img: "assets/img/infraestructura/16.jpg"
    },
  ]

  constructor() { }

 getInfra():Infraestructura[] {
   return this.infraestructura;
 }

}



export interface Infraestructura {
  nombre: string;
  img: string;
}
