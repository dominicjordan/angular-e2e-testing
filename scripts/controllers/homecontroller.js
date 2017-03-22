studentenApp.controller('HomeController', function($rootScope, $scope) {
    $rootScope.pageTitle = "Homepage";
    $scope.message = "";

    $scope.items = [
        {id:0, name:"Boodschappen doen", afgerond: false},
        {id:1, name:"Afwas doen", afgerond: false},
        {id:2, name:"Auto wassen", afgerond: false}
    ];

    $scope.statusText = "Lorem ipsum dolor mit";

    $scope.run = function() {
        $scope.statusText = "Done!";
    };

    $scope.submit = function() {
        $scope.message = "Hellow " + $scope.name;
    };
});