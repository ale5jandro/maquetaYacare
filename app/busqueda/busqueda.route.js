(function() {
  angular
    .module('busqueda')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config(stateProvider) {
      stateProvider
      .state('busqueda', {
        url: "/busqueda",
        templateUrl: "app/busqueda/busqueda.html",
        controller: "busquedaController",
        controllerAs: 'vm'
      });
    }
}());
