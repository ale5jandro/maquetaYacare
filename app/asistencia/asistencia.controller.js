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
        }

        function subtractDay(){
          asistencia.date.setDate(asistencia.date.getDate()-1);
          var newDateObj = new Date(asistencia.date);
          asistencia.date = newDateObj;
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
          integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
        {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25},
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
