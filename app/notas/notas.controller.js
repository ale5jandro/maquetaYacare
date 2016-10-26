(function() {
    'use strict';

    angular
        .module('notas')
        .controller('notasController', Controller);

    Controller.$inject = ['$scope', 'userFactory', '$q', '$mdMedia', '$element'];

    /* @ngInject */
    function Controller($scope, userFactory, $q, $mdMedia, $element) {
        var notas = this;
        notas.date = new Date();
        notas.disableEdit = true;
        notas.quarter=null;
        notas.grande = null;
        notas.notas = [{nt: 1}, {nt: 2}, {nt: 3}, {nt: 4}, {nt: 5}, {nt: 6}, {nt: 7}, {nt: 8}, {nt: 9}, {nt: 10}];


        notas.enableEdit = enableEdit;
        notas.dateChanged = dateChanged;
        notas.subtractDay = subtractDay;
        notas.addDay = addDay;

        notas.selected = null;

        activate();


        $scope.$watch(function() { return $mdMedia('gt-md'); }, function(big) {
          notas.grande = big;
        });

        notas.materias = ['Matematica' ,'Lengua' ,'Fisica' ,'Quimica' ,'Sociales', 'Ingles'];
        notas.searchTerm;
        notas.clearSearchTermMat = function() {
          notas.searchTermAssign = '';
        };

        notas.profesores = ['Arturo Vidal' ,'Santiago Vevo' ,'Pepe Roco' ,'Marcos Vengo' ,'Mariela Sosa', 'Sandra Yui'];
        notas.searchTerm;
        notas.clearSearchTermProf = function() {
          notas.searchTermProf = '';
        };
        // The md-select directive eats keydown events for some quick select
        // logic. Since we have a search input here, we don't need that logic.
        $element.find('input').on('keydown', function(ev) {
            ev.stopPropagation();
        });


        function enableEdit(){
          notas.disableEdit=!notas.disableEdit;
        }

        function dateChanged(){
          notas.disableEdit=true;
          notas.quarter = Math.floor((notas.date.getMonth() + 3) / 3);
        }

        function addDay(){
          notas.date.setDate(notas.date.getDate()+1);
          var newDateObj = new Date(notas.date);
          notas.date = newDateObj;
        }

        function subtractDay(){
          notas.date.setDate(notas.date.getDate()-1);
          var newDateObj = new Date(notas.date);
          notas.date = newDateObj;
        }


        var curso1={
          label: "curso 1",
          integrantes: [{name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'},
        {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'},
      {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}, {name:'ale, ale', nt1: 1, nt2:3, nt3: 9, pc: 6, nt: 6, pt: 8, gt8: 10, pta: "6.6", banco: 5, pt3: 6, pg: '6.75'}]
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

        notas.cursos=[curso1, curso2, curso3];

        function activate() {
          notas.quarter = Math.floor((notas.date.getMonth() + 3) / 3);
          notas.grande = $mdMedia('gt-md');
        }

    }
})();
