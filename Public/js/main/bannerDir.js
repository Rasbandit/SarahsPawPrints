angular.module('sarApp').directive('banner', () => ({
  restrict: 'E',
  templateUrl: './views/bannerDir.html',
  scope: {
    state: '='
  }
}));
