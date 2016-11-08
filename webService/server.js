var express = require('express');


var app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.use(allowCrossDomain);


app.use('/notas', function(req, res, next){
  res.status("200");

  var curso1={
    label: "curso 1",
    integrantes: [{name:'Abbondanzieri, Roberto', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 1, pt3: 6, pg: '6.75'}, {name:'Khan, Gerardo', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "7", banco: 2, pt3: 5, pg: '6.80'}, {name:'Hardrada, Harold', nt1: 1, nt2:3, nt3: 9, pc: 4, nt: 7, pt: 10, gt8: 19, pta: "5", banco: 3, pt3: 7, pg: '6.95'}, {name:'Zielinski, Gerald', nt1: 1, nt2:3, nt3: 5, pc: 3, nt: 5, pt: 9, gt8: 9, pta: "7.6", banco: 7, pt3: 6, pg: '9.75'},
  {name:'Napolitano, Luciano', nt1: 1, nt2:3, nt3: 9, pc: 7, nt: 8, pt: 9, gt8: 10, pta: "7", banco: 8, pt3: 9, pg: '7.75'}, {name:'Podolsky, Mario', nt1: 1, nt2:3, nt3: 9, pc: 7, nt: 8, pt: 9, gt8: 9, pta: "8.6", banco: 9, pt3: 7, pg: '8.50'}, {name:'Sosa, Mariana', nt1: 1, nt2:3, nt3: 5, pc: 7, nt: 9, pt: 8, gt8: 10, pta: "6.6", banco: 9, pt3: 6, pg: '7.75'}, {name:'Zabala, Marcela', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 8, pt: 6, gt8: 7, pta: "6", banco: 10, pt3: 8, pg: '8.75'}, {name:'Rosa, Carlos', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 7, pt: 7, gt8: 9, pta: "8.6", banco: 12, pt3: 7, pg: '8.75'}, {name:'Bighetti, Nelson', nt1: 1, nt2:3, nt3: 9, pc: 7, nt: 9, pt: 8, gt8: 7, pta: "8.5", banco: 14, pt3: 7, pg: '9.75'},
{name:'Gump, Forrest', nt1: 1, nt2:3, nt3: 9, pc: 7, nt: 6, pt: 9, gt8: 4, pta: "5.6", banco: 16, pt3: 6, pg: '5.75'}, {name:'Lagos, Juliana', nt1: 1, nt2:3, nt3: 9, pc: 3, nt: 9, pt: 7, gt8: 8, pta: "8.33", banco: 18, pt3: 9, pg: '8.25'}, {name:'Ramirez, Ricardo', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 22, pt3: 6, pg: '7.75'}, {name:'Allen, Barry', nt1: 1, nt2:3, nt3: 9, pc: 5, nt: 7, pt: 4, gt8: 7, pta: "7.6", banco: 24, pt3: 5, pg: '3.75'}, {name:'Zaballeta, Marcos', nt1: 1, nt2:3, nt3: 7, pc: 8, nt: 6, pt: 4, gt8: 6, pta: "4.6", banco: 30, pt3: 6, pg: '5.86'}]
  }

  var curso2={
    label: "curso 2",
    integrantes: [{name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'},
  {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'},
{name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}]
  }

  var curso3={
    label: "curso 3",
    integrantes: [{name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'},
  {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'},
{name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}]
  }

  // curso1.integrantes.unshift(cabecera);
  // curso2.integrantes.unshift(cabecera);
  // curso3.integrantes.unshift(cabecera);

  cursos=[curso1, curso2, curso3];

  res.send(cursos);
});


app.use('/asistencia', function(req, res, next){
  res.status("200");

  var cabecera = {
    banco: "Banco",
    nombre: "Nombre",
    edad: "Edad",
    falta: "Falta",
    presente: "Presencia",
    faltaAcumulada: "Faltas Acumuladas",
    tj: "Total Justificadas",
    ti: "Total Injustificadas",
    ts: "Total Suspenciones",
    tt: "Totales",
    porcentaje: "Porcentaje"
};


  var curso1={
    label: "curso 1",
    integrantes: [{nombre:'Hernandez, Diego', edad: 15, dni:35666999, falta: "0", faltaAcumulada: "9.25", presente: true, banco: 1, tj: 9, ti: 4, ts: 3, tt: 12, porcentaje: 36}, {nombre:'Waters, Roger', edad: 17, dni:35666695, falta: "3", faltaAcumulada: "3.50", presente: false, banco: 2, tj: 11, ti: 4, ts: 3, tt: 17, porcentaje: 75}, {nombre:' Aguero, Esteban', edad: 18, dni:35666999, falta: "2", faltaAcumulada: "10", presente: true, banco: 3, tj: 11, ti: 4, ts: 6, tt: 20, porcentaje: 33}, {nombre:'Connor, Sara', edad: 13, dni:35658699, falta: "2", faltaAcumulada: "11", presente: true, banco: 4, tj: 12, ti: 4, ts: 6, tt: 13, porcentaje: 50},
  {nombre:'Guevara, Ernesto', edad: 17, dni:31234567, falta: "0", faltaAcumulada: "5", presente: false, banco: 5, tj: 14, ti: 5, ts: 3, tt: 17, porcentaje: 40}, {nombre:'Riquelme, Juan', edad: 14, dni:369852145, falta: "2", faltaAcumulada: "16", presente: true, banco: 6, tj: 13, ti: 8, ts: 7, tt: 20, porcentaje: 70}, {nombre:'De medici, Monica', edad: 17, dni:39656258, falta: "0", faltaAcumulada: "7", presente: true, banco: 27, tj: 1, ti: 6, ts: 7, tt: 9, porcentaje: 66}, {nombre:'Zaballeta, Norma', edad: 14, dni:37666999, falta: "1", faltaAcumulada: "6.50", presente: true, banco: 29, tj: 11, ti: 2, ts: 6, tt: 20, porcentaje: 25}, {nombre:'Sosa, Emiliano', edad: 15, dni:35655999, falta: "0", faltaAcumulada: "10", presente: true, banco: 32, tj: 13, ti: 7, ts: 10, tt: 21, porcentaje: 50}, {nombre:'Garcia, Carlos', edad: 11, dni:35666922, falta: "0", faltaAcumulada: "8", presente: true, banco: 39, tj: 12, ti: 6, ts: 7, tt: 11, porcentaje: 11},
{nombre:'Loyd, Guillermo', edad: 14, dni:35123456, falta: "3", faltaAcumulada: "15", presente: false, banco: 77, tj: 14, ti: 3, ts: 6, tt: 14, porcentaje: 32}, {nombre:'Vilas, Nicolas', edad: 16, dni:35987456, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 50, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'Curie, Maria', edad: 15, dni:35123456, falta: "1", faltaAcumulada: "3", presente: true, banco: 53, tj: 12, ti: 2, ts: 3, tt: 23, porcentaje: 25}, {nombre:'Rosales, Mauricio', edad: 18, dni:35666993, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 27}, {nombre:'Perez, Armando', edad: 13, dni:33666999, falta: "1", faltaAcumulada: "1.25", presente: true, banco: 234, tj: 12, ti: 2, ts: 2, tt: 20, porcentaje: 66}]
  }

  var curso2={
    label: "curso 2",
    integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
  {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}]
  }

  var curso3={
    label: "curso 3",
    integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
  {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}]
  }

  curso1.integrantes.unshift(cabecera);
  curso2.integrantes.unshift(cabecera);
  curso3.integrantes.unshift(cabecera);

  cursos=[curso1, curso2, curso3];

  res.send(cursos);
});


app.use('/sanciones', function(req, res, next){
  res.status("200");

var curso1={
  label: "curso 1",
  integrantes: [{nombre:'Abbondanzieri, Roberto', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'Waters, Roger', edad: 17, dni:35777999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 25, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "3"}, {nombre:'Connor, Sara', edad: 18, dni:34775999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "4"}, {nombre:'Zaballeta, Norma', edad: 17, dni:35666123, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 33, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "11"},
{nombre:'Guevara, Ernesto', edad: 16, dni:35456999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 73, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "7"}, {nombre:'Riquelme, Juan', edad: 17, dni:35789999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "8"}, {nombre:'De medici, Monica', edad: 17, dni:36666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "12"}, {nombre:'Rosales, Mauricio', edad: 19, dni:33666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "15"}, {nombre:'Perez, Armando', edad: 18, dni:35456789, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "15.5"}, {nombre:'Garcia, Carlos', edad: 18, dni:36666759, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 26, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "6.5"},
{nombre:'Loyd, Guillermo', edad: 16, dni:39885299, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 63, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "17"}, {nombre:'Vilas, Nicolas', edad: 18, dni:35666456, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 13, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "11"}, {nombre:'Curie, Maria', edad: 17, dni:35789299, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 93, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "16.5"}, {nombre:'Sosa, Emiliano', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}]
}

var curso2={
  label: "curso 2",
  integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}]
}

var curso3={
  label: "curso 3",
  integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}]
}


  cursos=[curso1, curso2, curso3];

  res.send(cursos);
});


app.get('/busqueda/:busqueda', function(req, res){

  var array = [{nombre:'Abbondanzieri, Roberto', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'Waters, Roger', edad: 17, dni:35777999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 25, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "3"}, {nombre:'Connor, Sara', edad: 18, dni:34775999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "4"}, {nombre:'Zaballeta, Norma', edad: 17, dni:35666123, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 33, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "11"},
{nombre:'Guevara, Ernesto', edad: 16, dni:35456999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 73, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "7"}, {nombre:'Riquelme, Juan', edad: 17, dni:35789999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "8"}, {nombre:'De medici, Monica', edad: 17, dni:36666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "12"}, {nombre:'Rosales, Mauricio', edad: 19, dni:33666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "15"}, {nombre:'Perez, Armando', edad: 18, dni:35456789, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "15.5"}, {nombre:'Garcia, Carlos', edad: 18, dni:36666759, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 26, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "6.5"},
{nombre:'Loyd, Guillermo', edad: 16, dni:39885299, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 63, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "17"}, {nombre:'Vilas, Nicolas', edad: 18, dni:35666456, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 13, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "11"}, {nombre:'Curie, Maria', edad: 17, dni:35789299, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 93, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "16.5"}, {nombre:'Sosa, Emiliano', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}];

  console.log(req.params)



 var result = [];
  if(req.param('busqueda')){
      result = findFirstOccurrence(array, "nombre", req.param('busqueda'));
  }else{
      result = array;
  }
  res.send(result);
});

app.get('/busqueda', function(req, res){

  var array = [{nombre:'Abbondanzieri, Roberto', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'Waters, Roger', edad: 17, dni:35777999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 25, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "3"}, {nombre:'Connor, Sara', edad: 18, dni:34775999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "4"}, {nombre:'Zaballeta, Norma', edad: 17, dni:35666123, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 33, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "11"},
{nombre:'Guevara, Ernesto', edad: 16, dni:35456999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 73, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "7"}, {nombre:'Riquelme, Juan', edad: 17, dni:35789999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "8"}, {nombre:'De medici, Monica', edad: 17, dni:36666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "12"}, {nombre:'Rosales, Mauricio', edad: 19, dni:33666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "15"}, {nombre:'Perez, Armando', edad: 18, dni:35456789, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "15.5"}, {nombre:'Garcia, Carlos', edad: 18, dni:36666759, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 26, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "6.5"},
{nombre:'Loyd, Guillermo', edad: 16, dni:39885299, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 63, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "17"}, {nombre:'Vilas, Nicolas', edad: 18, dni:35666456, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 13, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "11"}, {nombre:'Curie, Maria', edad: 17, dni:35789299, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 93, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "0", sanciont: "16.5"}, {nombre:'Sosa, Emiliano', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},{nombre:'Antonio, Marco', edad: 56, dni: 16995886, students: 2}, {nombre: 'De Medici, Catalina', edad: 53, dni: 20202015, students: 2}, {nombre: 'Cesar, Julio', edad: 15, dni: 65656536}, {nombre: 'Hannover, Victoria', edad: 13, dni: 23556889}];

  res.send(array);
});


var findFirstOccurrence = function(array, property, value){
  var re = new RegExp(value, 'ig');
  var array2 = [];
  for(var i = 0 ; i < array.length; i++){
    if(array[i][property].match(re)){
      // return array[i];
      array2.push(array[i]);
    }
  }
  return array2;
}


var ser = app.listen(3023);
