
'use strict';
window.requirejs.config({
  paths: {
    'axios': '/static/vendor/axios.min',
    'jquery': ['/static/vendor/jquery-2.2.3.min'],
    'jquery-private': ['/static/vendor/jquery-private'],
    map: {
      '*': { 'jquery': 'jquery-private' },
      'jquery-private': { 'jquery': 'jquery' }
    },
    'jqueryCookie': '/static/vendor/jquery.cookie.1.4.1',
    'jqueryRating': '/static/vendor/star-rating-svg',
    'jqueryTimer': '/static/vendor/jquery.timer',
    'jqueryMarquee': '/static/vendor/jquery.marquee.min',
    'plyr': '/static/vendor/plyr',
    'Vimeo': '/static/vendor/player.min',
    'bootstrap': ['/static/vendor/bootstrap.min'],
    'aquaNManagerService': ['/static/javascripts/components/aquanmanager_service'],
    'easyTimer': '/static/vendor/easytimer',
    'nplayer_conf': '/static/vendor/nplayer_conf.js?20170104131',
    'nplayer': '/static/vendor/nplayer.js?20170104131',
    'nplayer_ui': '/static/vendor/nplayer_ui.js?20170104131',
    'cdnproxy': '/static/vendor/cdnproxy',
    'aquaPlayerService': ['/static/javascripts/components/aquaplayer_service'],
    'axplugin': ['/static/javascripts/components/axplugin'],
    'common': '/static/javascripts/common',
    'es6-promise': '/static/vendor/es6-promise.min',
    'download': '/static/vendor/download.min',
    'handlebars': '/static/vendor/handlebars.min',
    'text': '/static/vendor/text'
  },
  shim: {
    'jqueryCookie': {
      deps: ['jquery']
    },
    'jqueryMarquee': {
      deps: ['jquery']
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'jqueryRating': {
      deps: ['jquery']
    },
    'jqueryTimer': {
      deps: ['jquery']
    },
    'nplayer': {
      'deps': ['jquery']
    },
    'nplayer_ui': {
      'deps': ['jquery']
    },
    'cdnproxy': {
      'deps': ['nplayer_conf']
    }
  }
});
