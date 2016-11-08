(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function userFactory($http, $q) {

        var urlApi = 'https://colegios.unc.edu.ar/cnm/api/v1/';
        var ulrWS = 'backendPublic/'


        var apiFactory = {
             getUsers: getUsers,
             getArrayCards: getArrayCards,
             getNotas: getNotas,
             getAistencia: getAistencia,
             getSanciones: getSanciones
        };

        return apiFactory;

        ////////////////////////////


        function getUsers(){
            var def1 = $q.defer();
            $http.get(urlApi + 'legal_guardians')
            .success(function(data){
              def1.resolve(data);
              console.log("res1");
            })
            .error(function(err){
              def1.reject(err);
              console.log(err || true);
            });


            var def2 = $q.defer();
            $http.get(urlApi + 'students')
            .success(function(data){
              console.log("res2");
              def2.resolve(data);
            })
            .error(function(err){
              def2.reject(err);
              console.log(err || true);
            });

            return $q.all([def1.promise, def2.promise]);

        }

        function getNotas(){
          return $http.get(ulrWS + 'notas');
        }

        function getAistencia(){
          return $http.get(ulrWS + 'asistencia');
        }

        function getSanciones(){
          return $http.get(ulrWS + 'sanciones');
        }

        function getArrayCards(callback){
            return $http.get(urlApi + 'dummyJsonArrayCard')
            .success(function(data){
              callback(false, data);
            })
            .error(function(err){
              callback(err || true);
              console.log(err);
            });
        }

    }
})();
