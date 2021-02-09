import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private docentes:Docente[] = [
    {
        nombre: "Dra. Elizabeth del Carmen Varela Santos",
        mail: "e.varela@itstb.edu.mx",
        img: "assets/img/img-docentes/elizabeth-final.png",
        img_modal: "assets/img/img-docentes/elizabeth-modal.png",
        puesto: "Doctor en Ciencias en Ingenieria Bioquimica",
        universidad: "Instituto Tecnológico de Durango",
        especialidad: "Conservación y Aprovechamiento Integral de Alimentos",
        especialidad1: "Integrante de Cuerpo Académico ITESTB-CA-05",
        especialidad2: "Profesor con perfil deseable PRODEP",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Ana Line Vázquez Larios",
        mail: "ana.vazquez@itstb.edu.mx",
        img: "assets/img/img-docentes/ana-final.png",
        img_modal: "assets/img/img-docentes/ana-modal.png",
        puesto: "Doctora en Ciencias Biotecnologia",
        universidad: "CINVESTAV-IPN",
        especialidad: "Biotecnologia Enzimática y de Fermentaciones",
        especialidad1: "Investigación Nacional, Nivel C",
        especialidad2: "Profesor con perfil deseable PRODEP",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Paula Natalia Robledo Narváez",
        mail: "paula.robledo@itstb.edu.mx",
        img: "assets/img/img-docentes/paula-final.png",
        img_modal: "assets/img/img-docentes/paula-modal.png",
        puesto: "Doctora en Ciencias en Biotecnologia",
        universidad: "Cinvestav-IPN",
        especialidad: "Biotecnologia Enzimática y de Fermentación",
        especialidad1: "Investigación Nacional Nivel C",
        especialidad2: "Profesor con perfil deseable PRODEP",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Veronica Saucedo Rovalcoba",
        mail: "veronica.saucedo@itstb.edu.mx",
        img: "assets/img/img-docentes/veronica-final.png",
        img_modal: "assets/img/img-docentes/veronica-modal.png",
        puesto: "Doctor en Ciencias de los Materiales",
        universidad: "Universidad Autónoma del Estado de Mexico",
        especialidad: "Ingeniería de Procesos Biotecnológicos y Alimentarios",
        especialidad1: "Investigador Nacional, Nivel C",
        especialidad2: "Líder de la línea de Investigación II",
        especialidad3: "Líder del Cuerpo Académico ITESTB-CA-05",
        especialidad4: "Profesor con perfil deseable, PROMEP",
    },
    {
        nombre: "Dra. Beatriz Gutierrez Rivera",
        mail: "beatriz.gutierrez@itstb.edu.mx",
        img: "assets/img/img-docentes/beatriz-final.png",
        img_modal: "assets/img/img-docentes/beatriz-modal.png",
        puesto: "Doctora en Ciencias de los Alimentos",
        universidad: "Instituto Tecnológico de Veracruz",
        especialidad: " Biotecnología Enzimática y de Fermentaciones",
        especialidad1: "Profesor con perfil deseable PROMEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Karina Bustos Ramírez",
        mail: "karina.bustos@itstb.edu.mx",
        img: "assets/img/img-docentes/karina-final.png",
        img_modal: "assets/img/img-docentes/karina-modal.png",
        puesto: "Doctora en Ciencias Ambientales",
        universidad: "Universidad Autonomo del Estado de México",
        especialidad: "Conservación y Aprovechamiento Integral de Alimentos",
        especialidad1: "Investigación Nacional Nivel C",
        especialidad2: "Profesor con perfil deseable PRODEP",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Karen Aylin Vargas García",
        mail: "gabriela.hernandez@itstb.edu.mx",
        img: "assets/img/img-docentes/karen-final.png",
        img_modal: "assets/img/img-docentes/karen-modal.png",
        puesto: "Doctora en Ciencias en Alimentos",
        universidad: "Instituto Tecnológico de Veracruz",
        especialidad: "Conservación y Aprovechamiento Integral de Alimentos",
        especialidad1: "Integrante del cuerpo Académico Tecnologias para el uso e Intesificación de procesos biotecnológicos",
        especialidad2: "Profesor con perfil deseable, PROMEP",
        especialidad3: "",
        especialidad4: ""
    },
    {
      nombre: "Dra. Gabriela Hernández Ramírez",
      mail: "gabriela.hernandez@itstb.edu.mx",
      img: "assets/img/img-docentes/gabriela-final.jpg",
      img_modal: "assets/img/img-docentes/gabriela-modal.png",
      puesto: "Doctor en Ciencias en Entomología y Acarología",
      universidad: "Colegio de Posgraduados",
      especialidad: "Ingenieria de Procesos Biotecnológicos y Alimentarios",
      especialidad1: "Integrante del Cuerpo Académico ITESTB-CA-05",
      especialidad2: "Profesor con perfil deseable, PROMEP",
      especialidad3: "",
      especialidad4: ""
    }
];

    constructor() {

    }

    getDocentes():Docente[] {
        return this.docentes;
    }

    getDocente( idx ) {
      return this.docentes[idx];
    }

}

export interface Docente {
    nombre: string;
    mail: string;
    img: string;
    img_modal: string;
    puesto: string;
    universidad: string;
    especialidad: string;
    especialidad1: string;
    especialidad2: string;
    especialidad3: string;
    especialidad4: string;
};
