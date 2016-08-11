angular.module('feedz.subFeedFactory', [])
.factory('subFeedFactory', function($http, localStorageFactory){
  return {
    createSubFeed: (subfeed) => {
      return $http({
        method: 'post',
        url: '/f',
        data: {
          access_token: localStorageFactory.getFromLocalStorage('user_data').token,
          subfeedData: subfeed
        }
      })
    }
  }
})