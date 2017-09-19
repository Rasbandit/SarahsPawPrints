angular.module('sarApp').service('mainService', function ($http) {
  this.getPetPictures = function () {
    return $http({
      method: 'GET',
      url: '/api/getPortraits'
    }).then(response => response.data);
  };

  this.getOtherPictures = function () {
    return $http({
      method: 'GET',
      url: '/api/getOthers'
    }).then(response => response.data);
  };
});
