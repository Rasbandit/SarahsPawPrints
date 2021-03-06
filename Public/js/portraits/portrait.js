angular.module('sarApp').controller('portraitCtrl', function($scope, portraitService) {
  $scope.startIndex = 0;
  $scope.modal = {};
  $scope.large = $scope.petPortraits[0];
  $scope.hideNine = true;
  $scope.hideSix = true;
  $scope.imgLoading = false;

  if ($scope.petPortraits.length <= 9) {
    $scope.hideNine = false;
  }

  if ($scope.petPortraits.length <= 6) {
    $scope.hideSix = false;
  }

  $scope.getSubArraySix = function (start) {
    return $scope.petPortraits.slice(start, start + 6);
  };

  $scope.getSubArrayNine = function (start) {
    return $scope.petPortraits.slice(start, start + 9);
  };

  $scope.showMoreSix = function (incOrDec) {
    if (incOrDec === '+') {
      if ($scope.startIndex + 6 >= $scope.petPortraits.length) {
        $scope.startIndex = 0;
      } else {
        $scope.startIndex += 6;
      }
    }
    if (incOrDec === '-') {
      if ($scope.startIndex - 6 < 0) {
        $scope.startIndex = $scope.petPortraits.length - 6;
      } else {
        $scope.startIndex -= 6;
      }
    }
  };

  $scope.showMoreNine = function (incOrDec) {
    if (incOrDec === '+') {
      if ($scope.startIndex + 9 >= $scope.petPortraits.length) {
        $scope.startIndex = 0;
      } else {
        $scope.startIndex += 9;
      }
    }
    if (incOrDec === '-') {
      if ($scope.startIndex - 9 < 0) {
        $scope.startIndex = $scope.petPortraits.length - 9;
      } else {
        $scope.startIndex -= 9;
      }
    }
  };

  $scope.loadModal = function (id) {
    for (let i = 0; i < $scope.petPortraits.length; i++) {
      if (id === $scope.petPortraits[i].ID) {
        $scope.modal = $scope.petPortraits[i].large;
      }
    }
    $scope.showModal = true;
  };

  $scope.setLarge = function (id) {
    for (let i = 0; i < $scope.petPortraits.length; i++) {
      if (id === $scope.petPortraits[i].ID) {
        $scope.large = $scope.petPortraits[i];
      }
    }
  };

  $scope.setLarge(1);

  wheelzoom(document.querySelectorAll('.zoom'));
});
