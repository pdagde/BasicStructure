/**
 * Created by Pravin on 12/04/17.
 */

angular.module('calenderCodeCtrl',[])
    .controller('calenderCtrl',function ($scope,$state,$http,$window) {
    // $scope.user = AuthService.authuser();


    $scope.gotoHome = function(){
    	$state.go('app.eventHomePage');
    }
    $scope.gotologin = function(){
    	$state.go('app.login');
    }

    $scope.gotosignUp = function(){
      $state.go('app.signUp');
 } 

    $scope.gotocreate = function(){
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
         $state.go('app.newEvent');	
    }

    $scope.gotocontactpage = function(){
        $state.go('app.contactPage');
    }

   $scope.gotosearch = function(){
    
      var query = {
         calCode : $scope.calCode
      } 
       console.log(query);
        $http.post('/events/search',query).then(function (response) {
             //console.log(JSON.stringify(response));
              var event = response.data.event ;   
           if(!response.data.event[0]){
                $state.go('app.home');
            }else{
                console.log("ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"+JSON.stringify(event));
                // AuthService.storeEvent(event);
                $state.go('app.eventViewPage');
            }       
          });

    }
})
