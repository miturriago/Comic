import { Injectable } from '@angular/core';

@Injectable()
export class PersonajeService {

    //private hero:any[]=
    private personaje:Personaje[]=
        [
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC",
              clase:"Heroe"
            },
            {
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              casa:"DC",
              clase:"Heroe"
            },
            {
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              casa: "Marvel",
              clase:"Heroe"
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel",
              clase:"Heroe"
            },
            {
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              casa: "DC",
              clase:"Heroe"
            },
            {
              nombre: "Lex Luthor",
              bio: "El archienemigo de Superman nació en 1940 de la mano de Jerry Siegel y Joe Shuster. Luthor se caracteriza por ser un villano sin poderes. Aunque, eso sí, tiene mucho dinero. Y al fin y al cabo el dinero da poder, ¿no?.",
              img: "assets/img/luthor.jpg",
              aparicion: "1940-23-04",
              casa: "DC",
              clase:"Villano"
            },
            {
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              casa: "Marvel",
              clase:"Heroe"
            },
            {
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              casa: "Marvel",
              clase:"Heroe"
            },
            
            {
              nombre: "Joker",
              bio: "Nuestro Top Number One es uno de los villanos más famosos, no sólo del mundo del cómic, sino también del cine.Bill Finger y Bob Kane crearon a este guasón en el primer número de Batman de 1940. Su locura se basa en el caos absoluto; disfruta con la violencia y el humor, su humor.",
              img: "assets/img/joker.jpg",
              aparicion: "1940-25-04",
              casa: "DC",
              clase:"Villano"
            },
            {
              nombre: "Ronan el acusador",
              bio: "Una pena que un actor tan solvente como Lee Pace pase sin pena ni gloria por esa maravilla que es la primera parte de 'Guardianas de la Galaxia'. Le mantendremos por que mola mucho su martillo... y la escena final con Star Lord, aunque eso sería más mérito de Chris Pratt que otra cosa.",
              img: "assets/img/ronan.jpg",
              aparicion: "1967-12-08",
              casa: "Marvel",
              clase:"Villano"
            },
            {
              nombre: "Siniestro",
              bio: "El archienemigo de Green Lantern fue creado por John Broome y Gil Kane en 1961. En un principio, fue uno de los mejores Lanterns y mentor del propio Hal Jordan. Pero su visión de la justicia le hizo abandonar el camino de los héroes, convirtiéndole en el villano que conocemos. Mientras que Green Lantern usa el poder de la valentía representado con el color verde, Siniestro usa el amarillo que representa el miedo. Y hasta tiene su propia corporación de Lanterns: los Siniestro Corps.",
              img: "assets/img/siniestro.png",
              aparicion: "1986-12-12",
              casa: "DC",
              clase:"Villano"
            }

    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros(){
    getPersonajes():Personaje[]{
        return this.personaje;
    }

    getPersonaje(id:number){
        return this.personaje[id];   
    }

    buscarPersonaje(palabra:string):Personaje[]{
      let personajeArr:Personaje[] = [];
      palabra = palabra.toLowerCase();
      for( let personaje of this.personaje){
        let nombre = personaje.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           personajeArr.push(personaje);
        }
      }
      return personajeArr;
    }

}

export interface Personaje{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string,
    clase:string
}