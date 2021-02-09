import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeneracionesService {

  private generaciones: geneInterf []  = [
    {
      id: 0,
      name: 'Seleccione una Opción'
    },
    {
      id: 1,
      name: 'Primera'
    },
    {
      id: 2,
      name: 'Segunda'
    },
    {
      id: 3,
      name: 'Tercera'
    },
    {
      id: 4,
      name: 'Cuarta'
    },
    {
      id: 5,
      name: 'Quinta'
    },
    {
      id: 6,
      name: 'Sexta'
    },
    {
      id: 7,
      name: 'Séptima'
    },
    {
      id: 8,
      name: 'Octava'
    },
    {
      id: 9,
      name: 'Novena'
    },
    {
      id: 10,
      name: 'Décima'
    },
    {
      id: 11,
      name: 'Décima Primera'
    },
    {
      id: 12,
      name: 'Décima Segunda'
    },
    {
      id: 13,
      name: 'Décima Tercera'
    },
    {
      id: 14,
      name: 'Décima Cuarta'
    }
  ];

  private dataGeneraciones: dataGeneracionInterf [] = [
    {
      id: '128N1168',
      generacionId: 1,
      nombre: 'Villalva Fragoso Gerardo',
      director: 'Dra Karen Aylin Vargas Garcia',
      tutor: 'Dra. Ariana Arlene Huerta Heredia',
      tesis: "Uso de tecnología de membranas como estrategias de pretratamiento (clarificación) en hidrolizados de bagazo de caña para la producción de bioetanol."
    },
    {
      id: '128N1171',
      generacionId: 1,
      nombre: 'Zamudio Torres Ana Cristina',
      director: 'Dra. Beatriz Gutiérrez Rivera',
      tutor: 'M.C Ángel Cárdenas Cágal',
      tesis: 'Asilamiento, selección y caracterización de levaduras autóctonas termotolerantes productoras de etanol.'
    },




    {
      id: '138N0039',
      generacionId: 2,
      nombre: 'Magbis Azgad Aguilar García',
      director: 'Dra. Elizabeth del Carmen Varela Santos',
      tutor: 'Dra. Beatriz Gutiérrez Rivera',
      tesis: 'Estudio Cinetico de la aplicación de (US) de sonda como pre-tratamiento para la extracción de vainillina (Vanilla planifolia).'
    },
    {
      id: '138N0047',
      generacionId: 2,
      nombre: 'Jaime Pérez Barrera ',
      director: 'M.C Ángel Cárdenas Cágal',
      tutor: 'Dra. Elizabeth Varela Santos',
      tesis: 'Biorregulación de fitopatógenos presentes en chile habanero (Capsicum chinense jacq.) con el uso de Bacillus spp. '
    },





    {
      id: '138N0986',
      generacionId: 3,
      nombre: 'Ángel Medrano Gabriel',
      director: 'Dra. Paula Natalia Robledo Narváez',
      tutor: 'Dra. Karen Aylin Vargas García',
      tesis: 'Evaluación de dos métodos de obtención de maltodextrina a partir de plátano macho (Musa balbisiana) de desecho.'
    },
    {
      id: '138N0987',
      generacionId: 3,
      nombre: 'Cruz Tobón Marisol',
      director: 'Dra. Gabriela Hernández Ramírez',
      tutor: 'Dra. Gabriela Hernández Ramírez',
      tesis: 'Actividad antagónica de Trichoderma sp. Nativos contra principales patógenos fúngicos de jitomate (Solanum lycopersicum) cultivado en invernadero.'
    },
    {
      id: '138N0990',
      generacionId: 3,
      nombre: 'Ortiz Martínez Jesús ',
      director: 'Dra. Verónica Saucedo Rivalcoba',
      tutor: 'Dra. Paula Natalia Robledo Narváez',
      tesis: 'Estudio de un formulado de liberación controlada: encapsulando Metarhizium anisopliae.'
    },





    {
      id: '148N0004',
      generacionId: 4,
      nombre: 'Tirado Arreola Leslie Gabriela ',
      director: 'M.C. Ibis Rafael Huerta Mora',
      tutor: 'Dra. Beatriz Gutiérrez Rivera Narváez ',
      tesis: 'Estandarización del proceso del queso tipo crema de Chiapas, elaborado con leche pasteurizada en Tierra Blanca, Ver.'
    },
    {
      id: '148N0002',
      generacionId: 4,
      nombre: 'Abimael Huerta Zamora',
      director: 'Dra. Elizabeth del Carmen Varela Santos',
      tutor: 'Dra. Karina Bustos Ramírez ',
      tesis: 'Uso del proceso de explosión por vapor para la extracción de aceite en semilla de melón (Cucumis melo), comparándolo con un método convencional.'
    },
    {
      id: '148N0984',
      generacionId: 4,
      nombre: 'Montero Cadeza Gisela ',
      director: 'M.C Ángel Cárdenas Cágal',
      tutor: 'Dra. Beatriz Gutiérrez Rivera ',
      tesis: 'Evaluación de las características fisicoquímicas y microbiológicas del tomate cultivado en invernadero, utilizando diferentes sustratos.'
    },
    {
      id: '148N0983',
      generacionId: 4,
      nombre: 'Rodríguez de la Rosa Gabriela',
      director: 'Dra. Elizabeth del Carmen Varela Santos',
      tutor: 'M.C Ibis Rafael Huerta Mora ',
      tesis: 'Efecto del proceso de Altas  Presiones  Hidrostáticas (APH) como pretratamiento para la obtención de extractos de Vainilla (Vainillina planifolia).'
    },






    {
      id: '158N0005',
      generacionId: 5,
      nombre: 'Cortes Barranca Concepción ',
      director: 'Dra. Verónica Saucedo Rivalcoba',
      tutor: 'Dra. Paula Natalia Robledo Narváez',
      tesis: 'Estudio comparativo de dos sistemas de adsorción de compuestos fenólicos raquis y biofibra de queratina encapsulada.'
    },
    {
      id: '158N0006',
      generacionId: 5,
      nombre: 'Trujillo Chicuellar Estela',
      director: 'Dra. Beatriz Gutiérrez Rivera',
      tutor: 'Dra.  Paula Natalia Robledo Narváez ',
      tesis: 'Obtención de etanol a partir de jugo de caña hidrolizado en bagazo enriquecido con miel intermedia B utilizando la levadura autóctona Pichia kudriavceviii ITSTB-1.'
    },
    {
      id: '158N1056',
      generacionId: 5,
      nombre: 'Lopez Carrillo Zuridsadai',
      director: 'Dra. Paula Natalia Robledo Narváez',
      tutor: 'Dra. Paula Natalia Robledo Narváez',
      tesis: 'Producción algal con potencial en la obtención de omega 3 y ficoremediación de un efluente acuícola.'
    },
    {
      id: '158N1057',
      generacionId: 5,
      nombre: 'Jiménez Martínez Juana',
      director: 'Dra. Verónica Saucedo Rivalcoba',
      tutor: 'Dr. Manuel Alejandro Lizardi Jimenez',
      tesis: 'Funcionalización de superficies de poliuretano para adsorción de antioxidantes (polifenoles).'
    },
    {
      id: '158N1054',
      generacionId: 5,
      nombre: 'Sandria Elvira Paula ',
      director: 'Dra. Elizabeth del Carmen Varela Santos',
      tutor: 'Dra. Ana Line Vázquez Larios ',
      tesis: 'Caracterización de residuos agroindustriales (bagazo de piña, semilla de melón, suero de leche) y elaboración de un alimento balanceado para aves de corral.'
    },






    {
      id: '168N0008',
      generacionId: 6,
      nombre: 'Valdivia Rivera Sergio',
      director: 'Dr. Manuel Alejandro Lizardi Jiménez',
      tutor: 'Dra. Beatriz Gutiérrez Rivera',
      tesis: 'Producción de consorcios microbianos degradadores de hidrocarburos a partir de residuos agroindustriales de la Cuenca del Papaloapan.'
    },
    {
      id: '168N0007',
      generacionId: 6,
      nombre: 'Arce Ortiz Abel ',
      director: 'Dra. Tannia Alexandra Quiñones Muñoz',
      tutor: 'Dra. Karen Aylin Vargas García',
      tesis: 'Evaluación del colágeno extraído de residuos de la industria pesquera como microencapsulantes de compuestos bioactivos.'
    },
    {
      id: '168N0006',
      generacionId: 6,
      nombre: 'Ricardo Díaz Javier',
      director: 'Dr. Ricardo Hernández Martínez',
      tutor: 'Dra. Gabriela Hernández Ramírez',
      tesis: 'Producción de coagulanteProducción de coagulantes para la industria quesera por cultivo en medio sólido utilizando residuos agroindustriales de la región de la Cuenca del Papaloapan.'
    },
    {
      id: '168N0002',
      generacionId: 6,
      nombre: 'Martínez Valenzuela Irma Yolanda',
      director: 'Dra. Gabriela Hernández Ramírez',
      tutor: 'Dra. Karina Bustos Ramírez ',
      tesis: 'Síntesis, caracterización y determinación de la DL50 de biopelículas poliméricas reforzadas con oxido de grafeno.'
    },
    {
      id: '168N0004',
      generacionId: 6,
      nombre: 'Santiago Carrillo Francisca',
      director: 'Dra. Paula Natalia Robledo Narváez',
      tutor: 'Dra. Paula Natalia Robledo Narváez',
      tesis: 'Extracción de pectinas a partir de plátano macho Musa balbisiana para el aprovechamiento de residuos agroaindustriales.'
    },
    {
      id: '168N0003',
      generacionId: 6,
      nombre: 'Yescas Fernández Elisa ',
      director: 'Dra. Karen Aylin Vargas García',
      tutor: 'Dra. Karen Aylin Vargas García',
      tesis: 'Síntesis, caracterización y evaluación de propiedades de superficie y de transporte de membranas cerámicas a base de mullita infiltrada con SiO2.'
    },
    {
      id: '168N0005',
      generacionId: 6,
      nombre: 'Morando Grijalva Cristina América ',
      director: 'Dra. Ana Line Vázquez Larios',
      tutor: 'Dra. Karen Aylin Vargas García ',
      tesis: 'Generación de bioelectricidad y omega 3 a partir de agua residual acuícola y una microalga como catalizador catódico.'
    },
    {
      id: '168N0001',
      generacionId: 6,
      nombre: 'Villares Bueno Alejandra María ',
      director: 'Dra. Tannia Alexandra Quiñones Muñoz',
      tutor: 'M.C Ibis Rafael Huerta Mora ',
      tesis: 'Efecto de un consorcio microbiano en la recuperación de campos de cultivo de Saccharum officinarum.'
    },






    {
      id: '168N0998',
      generacionId: 7,
      nombre: 'Falcón Gómez Natali ',
      director: 'Dra. Beatriz Gutiérrez Rivera',
      tutor: 'Dra. Elizabeth del Carmen Varela Santos',
      tesis: 'Diseño de un proceso para la obtención de hidrolizados de levaduras para uso alimentario.'
    },
    {
      id: '168N0997',
      generacionId: 7,
      nombre: 'Rosas Cruz Raúl',
      director: 'Dra. Beatriz Gutiérrez Rivera',
      tutor: 'Dra. Veronica Saucedo Rivalcoba',
      tesis: 'Diseño de un proceso de sacarificación y fermentación simultanea para la producción de bioetanol mediante la inmovilización de componentes microbianos.'
    },
    {
      id: '168N0999',
      generacionId: 7,
      nombre: 'Rosas Díaz Mónica Monserrat ',
      director: 'M.C. Ángel Cárdenas Caga',
      tutor: 'Dra. Ana Line Vázquez Larios ',
      tesis: 'Evaluación de la capacidad bioestimulante de un biofermento en el crecimiento y producción de plantas de Stevia rebaudiana.'
    },
    {
      id: '168N1001',
      generacionId: 7,
      nombre: 'Figueroa Torres Luis Alberto ',
      director: 'Dr. Ricardo Hernández Ramírez',
      tutor: 'Dra. Karina Bustos Ramírez ',
      tesis: 'Uso de tecnologías emergente para el aprovechamiento de lirio acuático del estado de Veracruz.'
    },








    {
      id: '178N0005',
      generacionId: 8,
      nombre: 'Chena Quevedo Oscar ',
      director: 'MC Ibis Rafel Huerta Mora',
      tutor: 'Dra. Elizabeth del Carmen Varela Santos',
      tesis: 'Residuos agroindustriales en el manejo de diabetes mellitus: extractos como coadyuvantes benéficos en alimentos anti-diabetes.'
    },
    {
      id: '178N0004',
      generacionId: 8,
      nombre: 'Covarrubias Aguilar Luis Manuel ',
      director: 'Dra. Karina Bustos Ramírez',
      tutor: 'M.C Ibis Rafael Huerta Mora',
      tesis: 'Síntesis de recubrimientos comestibles en base a productos agrícolas y su evaluación en la calidad poscosecha de papaya maradol.'
    },






    {
      id: '178N0749',
      generacionId: 9,
      nombre: 'Sandoval Herazo Elber Jose ',
      director: 'Dra. Verónica Saucedo Rivalcoba',
      tutor: 'Dra. Ana Line Vázquez Larios',
      tesis: 'Evaluación de la contaminación por hidrocarburos en ambientes costeros en el caribe mexicano y colombiano: turismo y biorremediación mediante el uso de consorcios microbianos cultivados con residuos agroindustriales de la cuenca del papaloapan.'
    },
    {
      id: '178N0911',
      generacionId: 9,
      nombre: 'Vázquez Bautista Edwin ',
      director: 'M.C. Ibis Rafael Huerta Mora',
      tutor: 'Dra. Elizabeth del Carmen Varela Santos ',
      tesis: 'Evaluación de métodos combinados en el desarrollo de un snack a partir de calabacita curcuvia pepo.'
    },
    {
      id: '178N0912',
      generacionId: 9,
      nombre: 'Narciso Ortiz Leticia ',
      director: 'Dr. Manuel Alejandro Lizardi Jiménez',
      tutor: 'Dra. Ana Line Vazquez Larios ',
      tesis: 'Cuencas y sistemas arrecifales del golfo de méxico: contaminación por hidrocarburos y biorremediación por medio de microorganismos.'
    },







    {
      id: '188N0009',
      generacionId: 10,
      nombre: 'Martínez Linares Jaime Pastor ',
      director: 'Dra. Gabriela Hernández Ramírez',
      tutor: 'Dra. KarenAylin Vargas García',
      tesis: 'Recubrimientos biopoliméricos como alternativa para el control de la antracnosis en papaya Maradol (Carica papaya) durante postcosecha.'
    },
    {
      id: '188N0010',
      generacionId: 10,
      nombre: 'Infanzón Rodríguez Ana Lilia ',
      director: 'Dra. Beatriz Gutiérrez Rivera',
      tutor: 'Dra. Elizabeth del Carmen Varela Santos',
      tesis: 'Evaluación de la hidrolisis enzimática de extractos comerciales y autóctonos en pastos de los géneros Megachyrsus maximus y Penisetum purpureum para la producción de azucares reductores.'
    },
    {
      id: '188N0012',
      generacionId: 10,
      nombre: 'Valdivia Guzmán María Guadalupe',
      director: 'Dra. Ana Line Vázquez Larios',
      tutor: 'Dra. Gabriela Hernández Ramírez ',
      tesis: 'Producción de bioelectricidad a partir de agua residual de camarón en una celda de combustible microbiana.'
    },







    {
      id: '188N1031',
      generacionId: 11,
      nombre: 'Santiago Duran Liliana ',
      director: 'Dra Paula Natalia Robledo Narváez',
      tutor: 'Dra. Gabriela Hernández Ramírez ',
      tesis: 'Aprovechamiento del biofloc para la Generación de Biogas.'
    },
    {
      id: '188N1030',
      generacionId: 11,
      nombre: 'Marcos Ramírez Tonantzin ',
      director: 'Dra. Elizabeth del Carmen Varela Santos',
      tutor: 'Dra. Ana Line Vázquez Larios',
      tesis: 'Obtención y caracterización del almidón a partir de rizomas de cúrcuma.'
    },







    {
      id: '198N0012',
      generacionId: 12,
      nombre: 'Caballero Torres Andrés',
      director: 'Dra. Gabriela Hernández Ramírez',
      tutor: 'Dra. Paula Natalia Robledo Narváez',
      tesis: 'Desarrollo de un encapsulado de Metarhizium anisopliae para el manejo de Aedes aegypti, mosquito vector del Dengue, Chikungunya y Zika.'
    },
    {
      id: '198N0013',
      generacionId: 12,
      nombre: 'Ramírez Guzmán Grecia ',
      director: 'Dra Verónica Saucedo Rivalcoba',
      tutor: 'Dra. Karina Bustos Ramírez',
      tesis: 'Desarrollo y Caracterización de una película a partir de biopolimeros y antocianinas.'
    },
    {
      id: '198N0015',
      generacionId: 12,
      nombre: 'Carrasco Pacheco Rosa Maria ',
      director: 'Dra. Elizabeth del Carmen Varela Santos',
      tutor: 'M.C. Ibis Rafael Huerta Mora',
      tesis: 'Encapsulación de compuestos activos utilizando una matriz de almidón de rizoma de cúrcuma.'
    },
    {
      id: '198N0016',
      generacionId: 12,
      nombre: 'Colmenero Antonio Mario Alberto ',
      director: 'Dra. Karina Bustos Ramírez',
      tutor: 'Dra. Ana Line Vázquez Larios',
      tesis: 'Diseño e implementación de un equipo de microondas para la obtención de extractos naturales.'
    },
    {
      id: '198N0017',
      generacionId: 12,
      nombre: 'Gómez López Julio ',
      director: 'Dra. Gabriela Hernández Ramírez',
      tutor: 'Dra. Beatriz Gutiérrez Rivera',
      tesis: ''
    },







    {
      id: '208N0014',
      generacionId: 13,
      nombre: 'Martínez Herrera Cesia Victoria ',
      director: 'Dra. Beatriz Gutiérrez Rivera',
      tutor: 'Dra. Elizabeth del Carmen Varela Santos',
      tesis: 'Aislamiento y caracterización de cepas Bacillus spp. Con uso potencial en la industria Agroalimentaria'
    },
    {
      id: '208N0002',
      generacionId: 13,
      nombre: 'Hernández Mendoza Loida Dánae',
      director: 'M.C Ibis Rafael Huerta Mora',
      tutor: 'Dra. Paula Robledo Narváez',
      tesis: 'Efecto de un recubrimiento natural elaborado a base de almidón de malanga (Colocasia Esculenta) sobre la maduración de frutas producidas en la cuenca del Papaloapan,'
    },







    {
      id: '208N0016',
      generacionId: 14,
      nombre: 'Colmenero Antonio Milton Alejandro',
      director: 'Dra. Ana Line Vázquez Larios',
      tutor: 'Dra. Karen Aylin Vargas García',
      tesis: 'Aplicación de dos tipos de macrofitas en una celda de combustible microbiana acoplada a un humedal y agua residual'
    },
    {
      id: '208N0018',
      generacionId: 14,
      nombre: 'Flores Segura Rigoberto',
      director: 'Dra. Beatriz Gutiérrez Rivera',
      tutor: 'Dra. Karina Bustos Ramirez',
      tesis: 'Aislamiento y Caracterización de Bacillus cereus y otros Bacillus, en productos lácteos de la región de Tierra Blanca, Ver.'
    },
    {
      id: '208N0015',
      generacionId: 14,
      nombre: 'Anaya Avendaño Irving ',
      director: 'Dra. Paula Natalia Robledo Narváez',
      tutor: 'Dra. Elizabeth del Carmen Varela Santos',
      tesis: 'Producción de biomasa algal en exteriores empleando efluente acuícola para la generación de biodiesel. '
    }

  ];


  constructor() { }

  getGeneraciones(){
    return this.generaciones;
  }

  getDataGeneraciones() {
    return this.dataGeneraciones;
  }


}


export interface geneInterf {
  id: number;
  name: string;
}

export interface dataGeneracionInterf {
  id: string;
  generacionId: number;
  nombre: string;
  director: string;
  tutor: string;
  tesis:string;
}



