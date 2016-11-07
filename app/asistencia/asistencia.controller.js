(function() {
    'use strict';

    angular
        .module('asistencia')
        .controller('asistenciaController', Controller);

    Controller.$inject = ['$scope', 'userFactory', '$q'];

    /* @ngInject */
    function Controller($scope, userFactory, $q) {
        var asistencia = this;
        console.log("ale");

        asistencia.date = new Date();
        asistencia.disableEdit = true;
        asistencia.quarter=null;


        asistencia.enableEdit = enableEdit;
        asistencia.dateChanged = dateChanged;
        asistencia.subtractDay = subtractDay;
        asistencia.addDay = addDay;
        // asistencia.getterSetterDate = getterSetterDate;

        activate();

        // function getterSetterDate(date){
        //   return date || asistencia.date;
        // }

        function enableEdit(){
          asistencia.disableEdit=!asistencia.disableEdit;
        }

        function dateChanged(){
          asistencia.disableEdit=true;
          asistencia.quarter = Math.floor((asistencia.date.getMonth() + 3) / 3);
        }

        function addDay(){
          asistencia.date.setDate(asistencia.date.getDate()+1);
          var newDateObj = new Date(asistencia.date);
          asistencia.date = newDateObj;
          asistencia.quarter = Math.floor((asistencia.date.getMonth() + 3) / 3);
        }

        function subtractDay(){
          asistencia.date.setDate(asistencia.date.getDate()-1);
          var newDateObj = new Date(asistencia.date);
          asistencia.date = newDateObj;
          asistencia.quarter = Math.floor((asistencia.date.getMonth() + 3) / 3);
        }

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
        {nombre:'Guevara, Ernesto', edad: 17, dni:31234567, falta: "0", faltaAcumulada: "5", presente: false, banco: 5, tj: 14, ti: 5, ts: 3, tt: 17, porcentaje: 40}, {nombre:'Riquelme, Juan', edad: 14, dni:369852145, falta: "2", faltaAcumulada: "16", presente: true, banco: 6, tj: 13, ti: 8, ts: 7, tt: 20, porcentaje: 70}, {nombre:'De medici, Monica', edad: 17, dni:39656258, falta: "0", faltaAcumulada: "7", presente: true, banco: 27, tj: 1, ti: 6, ts: 7, tt: 9, porcentaje: 66}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
      {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}]
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

        asistencia.cursos=[curso1, curso2, curso3];

        function activate() {
          console.log("asistencia.cursos");
          asistencia.quarter = Math.floor((asistencia.date.getMonth() + 3) / 3);
        }

    }
})();
