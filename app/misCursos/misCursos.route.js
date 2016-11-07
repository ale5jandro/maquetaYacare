(function() {
  angular
    .module('miscursos')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config(stateProvider) {
      stateProvider
      .state('miscursos', {
        url: "/miscursos",
        templateUrl: "app/misCursos/misCursos.html",
        controller: "misCursosController",
        controllerAs: 'vm'
      });
    }
}());
