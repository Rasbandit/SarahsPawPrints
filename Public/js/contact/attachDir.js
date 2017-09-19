angular.module('sarApp').directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link(scope, element, attrs) {
      const model = $parse(attrs.fileModel);
      const modelSetter = model.assign;

      element.bind('change', () => {
        scope.$apply(() => {
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
}]);
