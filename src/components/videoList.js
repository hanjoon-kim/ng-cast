angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoList.html',
    // controller: function() {
    //   this.videos = window.exampleVideoData;
    //   console.log(this);
    // }
  });
