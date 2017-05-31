angular.module('sarApp').directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                element[0].style.display = "block";
            });
            element.bind('error', function(){
                element[0].style.display = "none";
            });
        }
    };
});
