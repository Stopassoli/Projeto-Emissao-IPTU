var app = angular.module('myApp', ['duScroll', 'ui.utils']);

app.controller('appCtrl', ['$scope', '$document', function($scope, $document){
  $scope.boletos = [
    {
      date: '20/03/15',
      price: 142.86,
      active: false
    }, {
      date: '20/03/15',
      price: 142.86,
      active: false
    }, {
      date: '20/03/15',
      price: 142.86,
      active: false
    }, {
      date: '20/03/15',
      price: 142.86,
      active: false
    }, {
      date: '20/03/15',
      price: 142.86,
      active: false
    }, {
      date: '20/03/15',
      price: 142.86,
      active: false
    }, {
      date: '20/03/15',
      price: 142.86,
      active: false
    }
  ];

  $scope.$watch("cpf", function(newVal, oldVal){
    if (typeof newVal != 'undefined') {
      if (newVal.length == 11 ) {
        $('html,body').animate({scrollTop:1000}, 500);
      };
    };
  });

  $scope.$watch("cnpj", function(newVal, oldVal){
    if (typeof newVal != 'undefined') {
      if (newVal.length == 14) {
        $('html,body').animate({scrollTop:1000}, 500);
      };
    };
  });

  $scope.$watch("contribuinte", function(newVal, oldVal){
    if (typeof newVal != 'undefined') {
      if (newVal.length == 10) {
        $('html,body').animate({scrollTop:1000}, 500);
      };
    };
  });

  $scope.$watch("imovel", function(newVal, oldVal){
    if (typeof newVal != 'undefined') {
      if (newVal.length == 10) {
        $('html,body').animate({scrollTop:1000}, 500);
      };
    };
  });  

  // $scope.toggleActive = function (s) {
  //   s = !s;
  // };

  $scope.selectAllDebitos = function (s) {

    if ($scope.checkUnica == false) {
      $scope.checkUnica = true;
    }else {
      $scope.checkUnica = false;
    };

    if ($scope.check == true) {
      $scope.check = false;
    };
    
    if ($scope.debito == true) {
      $scope.debito = false;
    } else {
      $scope.debito = true;
    }

    angular.forEach(s, function(a){
      a.active = !a.active;
    });
  };

  $scope.selectDebito = function (s) {
    if ($scope.checkUnica == false) {
      $scope.checkUnica = true;
    }else {
      $scope.checkUnica = false;
    };
    if ($scope.check == true) {
      $scope.check = false;
    };
    if ($scope.AllDebitos == true) {
      $scope.AllDebitos = false;
    } else {
      $scope.AllDebitos = true;
    };
    angular.forEach(s, function(a){
      a.active = !a.active;
    });
  };

  $scope.selectUnicaAll = function (s) {
    $scope.check = 0;
    angular.forEach(s, function(a){
    if (!a.active){
      a.active = !a.active;
      }
    });
  };  

  $scope.selectAll = function (s) {
    angular.forEach(s, function(a){
    if (!a.active){
      a.active = !a.active;
      }
    });
  }; 
  
  $scope.selectUn = function (s){
    angular.forEach(s, function(a){
    if (a.active){
      a.active = !a.active;
      }
    });    
  }; 

  $scope.total = function () {
    var total = 0;

    angular.forEach ($scope.boletos, function (s) {
      if (s.active) {
        total += s.price;
      }
    });

    return total;
  };

  $scope.totalAV = function () {
    var total = 0;

    angular.forEach ($scope.boletos, function (s) {
        total += s.price;
    });

    return total;
  };

}]);