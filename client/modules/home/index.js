/**
 * Created by Pravin on 12/04/17.
 */


angular.module('appHome',['calenderCodeCtrl','calenderCtrl'])
    .config(function($stateProvider) {
        $stateProvider

            .state('app.landingPage', {
                url: "/landingPage",
                templateUrl: "modules/home/template/landingPage.html",
                controller : "calenderCtrl"
            })
            .state('app.calendercode', {
                url: "/calendercode",
                templateUrl: "modules/home/template/calendercode.html",
                controller : "calendercodeCtrl"
            })
           


    });
