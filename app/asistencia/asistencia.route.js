(function() {
  angular
    .module('asistencia')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config(stateProvider) {
      stateProvider
      .state('asistencia', {
        url: "/asistencia",
        templateUrl: "app/asistencia/asistencia.html",
        controller: "asistenciaController",
        controllerAs: 'asistencia'
      });
    }
}());
