angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    // controller: function() {
    //   this.video = window.exampleVideoData[0];
    //   console.log(this.video)
    // }

  });
