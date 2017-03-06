
'use strict';
requirejs.config({
  paths: {
    'jquery': ['/static/vendor/jquery-2.2.3.min'],
    'jquery-private': ['/static/vendor/jquery-private'],
    map: {
      '*': { 'jquery': 'jquery-private' },
      'jquery-private': { 'jquery': 'jquery' }
    },
    'jqueryCookie': '/static/vendor/jquery.cookie.1.4.1',
    'jqueryRating': '/static/vendor/star-rating-svg',
    'jqueryTimer': '/static/vendor/jquery.timer',
    'plyr': '/static/vendor/plyr',
    'Vimeo': '/static/vendor/player.min',
    'axios': 'https://unpkg.com/axios/dist/axios.min'
  },
  shim: {
    'jqueryCookie': {
      deps: ['jquery']
    },
    'jqueryRating': {
      deps: ['jquery']
    },
    'jqueryTimer': {
      deps: ['jquery']
    }
  }
});
