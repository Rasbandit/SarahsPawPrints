angular.module('sarApp').directive('imageonload', () => ({
  restrict: 'A',
  link(scope, element, attrs) {
    element.bind('load', () => {
      element[0].style.display = 'block';
    });
    element.bind('error', () => {
      element[0].style.display = 'none';
    });
  }
}));
