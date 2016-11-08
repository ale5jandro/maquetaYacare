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
          userFactory.getAistencia().then(function(data){
            asistencia.cursos = data.data;
            asistencia.loading=false;
          });
          asistencia.loading=true;
        }

        function addDay(){
          asistencia.date.setDate(asistencia.date.getDate()+1);
          var newDateObj = new Date(asistencia.date);
          asistencia.date = newDateObj;
          asistencia.quarter = Math.floor((asistencia.date.getMonth() + 3) / 3);
          asistencia.disableEdit=true;
          userFactory.getAistencia().then(function(data){
            asistencia.cursos = data.data;
            asistencia.loading=false;
          });
          asistencia.loading=true;
        }

        function subtractDay(){
          asistencia.date.setDate(asistencia.date.getDate()-1);
          var newDateObj = new Date(asistencia.date);
          asistencia.date = newDateObj;
          asistencia.quarter = Math.floor((asistencia.date.getMonth() + 3) / 3);
          asistencia.disableEdit=true;
          userFactory.getAistencia().then(function(data){
            asistencia.cursos = data.data;
            asistencia.loading=false;
          });
          asistencia.loading=true;
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

      //   var curso1={
      //     label: "curso 1",
      //     integrantes: [{nombre:'Hernandez, Diego', edad: 15, dni:35666999, falta: "0", faltaAcumulada: "9.25", presente: true, banco: 1, tj: 9, ti: 4, ts: 3, tt: 12, porcentaje: 36}, {nombre:'Waters, Roger', edad: 17, dni:35666695, falta: "3", faltaAcumulada: "3.50", presente: false, banco: 2, tj: 11, ti: 4, ts: 3, tt: 17, porcentaje: 75}, {nombre:' Aguero, Esteban', edad: 18, dni:35666999, falta: "2", faltaAcumulada: "10", presente: true, banco: 3, tj: 11, ti: 4, ts: 6, tt: 20, porcentaje: 33}, {nombre:'Connor, Sara', edad: 13, dni:35658699, falta: "2", faltaAcumulada: "11", presente: true, banco: 4, tj: 12, ti: 4, ts: 6, tt: 13, porcentaje: 50},
      //   {nombre:'Guevara, Ernesto', edad: 17, dni:31234567, falta: "0", faltaAcumulada: "5", presente: false, banco: 5, tj: 14, ti: 5, ts: 3, tt: 17, porcentaje: 40}, {nombre:'Riquelme, Juan', edad: 14, dni:369852145, falta: "2", faltaAcumulada: "16", presente: true, banco: 6, tj: 13, ti: 8, ts: 7, tt: 20, porcentaje: 70}, {nombre:'De medici, Monica', edad: 17, dni:39656258, falta: "0", faltaAcumulada: "7", presente: true, banco: 27, tj: 1, ti: 6, ts: 7, tt: 9, porcentaje: 66}, {nombre:'Zaballeta, Norma', edad: 14, dni:37666999, falta: "1", faltaAcumulada: "6.50", presente: true, banco: 29, tj: 11, ti: 2, ts: 6, tt: 20, porcentaje: 25}, {nombre:'Sosa, Emiliano', edad: 15, dni:35655999, falta: "0", faltaAcumulada: "10", presente: true, banco: 32, tj: 13, ti: 7, ts: 10, tt: 21, porcentaje: 50}, {nombre:'Garcia, Carlos', edad: 11, dni:35666922, falta: "0", faltaAcumulada: "8", presente: true, banco: 39, tj: 12, ti: 6, ts: 7, tt: 11, porcentaje: 11},
      // {nombre:'Loyd, Guillermo', edad: 14, dni:35123456, falta: "3", faltaAcumulada: "15", presente: false, banco: 77, tj: 14, ti: 3, ts: 6, tt: 14, porcentaje: 32}, {nombre:'Vilas, Nicolas', edad: 16, dni:35987456, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 50, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'Curie, Maria', edad: 15, dni:35123456, falta: "1", faltaAcumulada: "3", presente: true, banco: 53, tj: 12, ti: 2, ts: 3, tt: 23, porcentaje: 25}, {nombre:'Rosales, Mauricio', edad: 18, dni:35666993, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 27}, {nombre:'Perez, Armando', edad: 13, dni:33666999, falta: "1", faltaAcumulada: "1.25", presente: true, banco: 234, tj: 12, ti: 2, ts: 2, tt: 20, porcentaje: 66}]
      //   }
      //
      //   var curso2={
      //     label: "curso 2",
      //     integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
      //   {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
      // {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}]
      //   }
      //
      //   var curso3={
      //     label: "curso 3",
      //     integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
      //   {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
      // {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}]
      //   }
        //
        // curso1.integrantes.unshift(cabecera);
        // curso2.integrantes.unshift(cabecera);
        // curso3.integrantes.unshift(cabecera);
        //
        // asistencia.cursos=[curso1, curso2, curso3];

        function activate() {
          asistencia.quarter = Math.floor((asistencia.date.getMonth() + 3) / 3);
          userFactory.getAistencia().then(function(data){
            asistencia.loading=false;
            asistencia.cursos = data.data;

          });
          asistencia.loading=true;

        }

    }
})();
