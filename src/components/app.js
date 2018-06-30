angular.module('video-player')

  .component('app', {

    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      var self = this;
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function() {
        self.currentVideo = this.video;
      };
      this.searchResults = function(query) {
        youTube.search(query, self.getVideo);
      };
      this.getVideo = function(videos) {
        self.videos = videos;
        self.currentVideo = videos[0];
      };
    }
  });
