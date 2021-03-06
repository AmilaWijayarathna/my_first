(function () {
    'use strict';


    angular
        .module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['$scope' , 'registerService' , '$state','$window'];

    function registerController($scope , registerService , $state) {
         
        $scope.register = function () {
         registerService.register($scope.details).then(function success(data) {
            if(data.status==200){
                $state.go('app.login');
                window.alert("Success register!");
             }else{
                 $state.go('app.register');
                window.alert("Invalid register!");
             }
         });
        }
    }

})();


