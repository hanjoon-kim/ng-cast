angular.module('video-player')

  .component('app', {

    templateUrl: 'src/templates/app.html',
    controller: function() {
      var self = this;
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function() {
        self.currentVideo = this.video;
      };
      this.searchResults = function() {};
    }
    //Passed in the on-click function to video list
    //On-click in the video list, we want it to return the video selected
    //run select video when the video is clicked on
  });
