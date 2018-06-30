angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: query,
          key: window.YOUTUBE_API_KEY,
          maxResults: 5,
          videoEmbeddable: 'true',
          part: 'snippet',
          type: 'video'
        }
      }).then(function successCallback(data) {
        callback(data.data.items);
      }), function errorCallback(error) {
      };
    };
  });