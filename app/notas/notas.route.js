(function() {
  angular
    .module('notas')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config(stateProvider) {
      stateProvider
      .state('notas', {
        url: "/notas",
        templateUrl: "app/notas/notas.html",
        controller: "notasController",
        controllerAs: 'notas'
      });
    }
}());
