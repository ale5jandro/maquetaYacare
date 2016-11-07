(function() {
  angular
    .module('sanciones')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config(stateProvider) {
      stateProvider
      .state('sanciones', {
        url: "/sanciones",
        templateUrl: "app/sanciones/sanciones.html",
        controller: "sancionesController",
        controllerAs: 'sanciones'
      });
    }
}());
