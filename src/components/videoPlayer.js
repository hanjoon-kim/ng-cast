angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      videos: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    // controller: function() {
    //   this.video = window.exampleVideoData[0];
    //   console.log('https://www.youtube.com/embed/' + this.video.id.videoId);
    // }
  });
