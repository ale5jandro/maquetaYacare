(function() {
    'use strict';

    angular
        .module('busqueda')
        .controller('busquedaController', Controller);

    Controller.$inject = ['$scope', 'userFactory', '$q'];

    /* @ngInject */
    function Controller($scope, userFactory, $q) {
        var vm = this;
        vm.selected=null;

        activate();

        vm.searchDialog = {
          visible: false,
          recursive: false
        };

        vm.toogleSearchOptions = function (option) {
          if (option === "visible") vm.searchDialog.visible = !vm.searchDialog.visible;
          if (option === "recursive") vm.searchDialog.recursive = !$vm.searchDialog.recursive;
        }


        var person = {
          nombre:"Ale",
          apellido: "Aiegetti",
          edad: 55,
          dni: 54986782,
          rol: "Estudiante",
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIpIFnaPTMQl8TUIPwMWIdgXTdKnqxumbHGpMMeVrbIkC2kJI"
        };

        vm.foto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIpIFnaPTMQl8TUIPwMWIdgXTdKnqxumbHGpMMeVrbIkC2kJI"
        vm.arrayPerson=[];

        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // vm.arrayPerson.push(person);
        // .then(values=>{
        //   return values;
        // });
        function activate() {
          userFactory.getUsers().then(function(data){
              vm.arrayPerson = vm.arrayPerson.concat(data[0]);
              vm.arrayPerson = vm.arrayPerson.concat(data[1]);
              console.log(vm.arrayPerson);
          }
          );
        }


        vm.seleccionarAle = function(index){
          console.log(index);
          if(vm.selected!=index){
            vm.selected=index;
          }
          else{
            vm.selected=null;
          }
          //
          // if (window.getSelection) {
          //  if (window.getSelection().empty) {  // Chrome
          //    window.getSelection().empty();
          //  } else if (window.getSelection().removeAllRanges) {  // Firefox
          //    window.getSelection().removeAllRanges();
          //  }
          // } else if (document.selection) {  // IE?
          //  document.selection.empty();
          // }

        }

    }
})();
