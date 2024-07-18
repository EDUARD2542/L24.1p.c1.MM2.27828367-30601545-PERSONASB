/*2. PERSONAS-B
*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
*reporte al final la edad promedio y la edad mayor entre las mujeres.
*Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
*José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida
*presenta el siguiente formato:
*Edad promedio: 18.50
*Edad mayor entre las mujeres: 19
*/

import Cl_general from "./general.js";
import Cl_personas from "./personas.js";

let persona = new Cl_personas("Luis",15,"hombre");
let persona2 = new Cl_personas("Ana",19,"mujer");
let persona3 = new Cl_personas("Jose",21,"hombre");
let persona4 = new Cl_personas("Carmen",17,"mujer");
let persona5 = new Cl_personas("Rosa",18,"mujer");
let persona6 = new Cl_personas("Jose",22,"hombre");
let persona7 = new Cl_personas("Maria",17,"mujer");
let persona8 = new Cl_personas("Luz",19,"mujer");
let persona9 = new Cl_personas("Rafael",23,"hombre");
let persona10 = new Cl_personas("Liz",15,"mujer");
let persona11 = new Cl_personas("Carlos",20,"hombre");
let persona12 = new Cl_personas("Leo",16,"hombre");

let general = new Cl_general();
general.procesarPersona(persona);
general.procesarPersona(persona2);
general.procesarPersona(persona3);
general.procesarPersona(persona4);
general.procesarPersona(persona5);
general.procesarPersona(persona6);
general.procesarPersona(persona7);
general.procesarPersona(persona8);
general.procesarPersona(persona9);
general.procesarPersona(persona10);
general.procesarPersona(persona11);
general.procesarPersona(persona12);

let salida= document.getElementById("salida");

salida.innerHTML = "Edad promedio: "+general.promedioEdad();
salida.innerHTML +="<br>Edad mayor entre las mujeres: "+general.devolveredadMayor();