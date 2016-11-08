(function() {
    'use strict';

    angular
        .module('sanciones')
        .controller('sancionesController', Controller);

    Controller.$inject = ['$scope', 'userFactory', '$q', '$filter', '$timeout'];

    /* @ngInject */
    function Controller($scope, userFactory, $q, $filter, $timeout) {
        var sanciones = this;
        console.log("ale");

        sanciones.date = new Date();
        sanciones.disableEdit = true;
        sanciones.quarter=null;
        sanciones.selected = [];
        sanciones.select=true;
        sanciones.profesores = ['Arturo Vidal' ,'Santiago Vevo' ,'Pepe Roco' ,'Marcos Vengo' ,'Mariela Sosa', 'Sandra Yui'];
        sanciones.tipos = ['Injustificables', 'Llamada de Atención', 'Suspensión'];


        sanciones.enableEdit = enableEdit;
        sanciones.dateChanged = dateChanged;
        sanciones.subtractDay = subtractDay;
        sanciones.addDay = addDay;
        // sanciones.getterSetterDate = getterSetterDate;
        sanciones.querySearch = querySearch;
        sanciones.searchTextChange = searchTextChange;
        sanciones.selectedItemChange = selectedItemChange;

        activate();

        // function getterSetterDate(date){
        //   return date || sanciones.date;
        // }


        //autocomplete
        function querySearch (query) {
          var results = $filter('filter')(sanciones.profesores, query);
          var deferred
          if (true) {//tiro un tiempo como buscando en la base
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 5000, false);
            return deferred.promise;
          } else {
            return results;
          }
        }

        function searchTextChange(text) {
          console.log('Text changed to ' + text);
        }

        function selectedItemChange(item) {
          console.log('Item changed to ' + JSON.stringify(item));
        }

        function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);

          return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
          };

        }
        //!autocomplete

        function enableEdit(){
          sanciones.disableEdit=!sanciones.disableEdit;
        }

        function dateChanged(){
          sanciones.disableEdit=true;
          sanciones.quarter = Math.floor((sanciones.date.getMonth() + 3) / 3);
          userFactory.getSanciones().then(function(data){
            sanciones.loading=false;
            sanciones.cursos = data.data;
          });
          sanciones.loading=true;
          sanciones.disableEdit=true;
        }

        function addDay(){
          sanciones.date.setDate(sanciones.date.getDate()+1);
          var newDateObj = new Date(sanciones.date);
          sanciones.date = newDateObj;
          sanciones.quarter = Math.floor((sanciones.date.getMonth() + 3) / 3);
          userFactory.getSanciones().then(function(data){
            sanciones.loading=false;
            sanciones.cursos = data.data;
          });
          sanciones.loading=true;
          sanciones.disableEdit=true;
        }

        function subtractDay(){
          sanciones.date.setDate(sanciones.date.getDate()-1);
          var newDateObj = new Date(sanciones.date);
          sanciones.date = newDateObj;
          sanciones.quarter = Math.floor((sanciones.date.getMonth() + 3) / 3);
          userFactory.getSanciones().then(function(data){
            sanciones.loading=false;
            sanciones.cursos = data.data;
          });
          sanciones.loading=true;
          sanciones.disableEdit=true;
        }

//agregar sanciones por dia y totales???

      //   var curso1={
      //     label: "curso 1",
      //     integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
      //   {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
      // {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}]
      //   }
      //
      //   var curso2={
      //     label: "curso 2",
      //     integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
      //   {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
      // {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}]
      //   }
      //
      //   var curso3={
      //     label: "curso 3",
      //     integrantes: [{nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
      //   {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"},
      // {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}, {nombre:'ale, ale', edad: 18, dni:35666999, falta: "0", faltaAcumulada: "6.25", presente: true, banco: 23, tj: 10, ti: 3, ts: 5, tt: 19, porcentaje: 25, sanciond: "1/2", sanciont: "9"}]
      //   }


        // sanciones.cursos=[curso1, curso2, curso3];

        function activate() {
          sanciones.quarter = Math.floor((sanciones.date.getMonth() + 3) / 3);
          userFactory.getSanciones().then(function(data){
            sanciones.loading=false;
            sanciones.cursos = data.data;
          });
          sanciones.loading=true;
        }

    }
})();
