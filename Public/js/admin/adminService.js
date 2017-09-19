angular.module('sarApp').service('dataService', function ($http) {
  this.storeImage = function (imageData, fileName) {
    let imageExtension = imageData.split(';')[0].split('/');
    imageExtension = imageExtension[imageExtension.length - 1];

    const newImage = {
      imageName: fileName,
      imageBody: imageData,
      imageExtension,
      userEmail: 'todd.rasband@gmail.com'
    };

    return $http({
      method: 'POST',
      url: '/api/email',
      data: newImage
    }).then((response) => {
      console.log(response);
    });
  };
});
