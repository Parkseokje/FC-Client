'use strict';
window.define([
  'axios'
], function (axios) {
  var self = null;

  function AquaNManagerService (options) {
    self = this;

    self.extendOptions(options);
    self.init();
  }

  AquaNManagerService.prototype = {
    // 옵션 저장 변수
    options: {},
    // 옵션 저장 함수
    extend: function (a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    },
    // 옵션 확장
    extendOptions: function (options) {
      this.options = this.extend({}, this.options);
      this.extend(this.options, options);
    },
    // 컴포넌트 초기화
    init: function () {
      console.log('init');
    },
    getDeviceType: function () {
      if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) {
        return 'ios';
      } else if (navigator.userAgent.match(/Android/i)) {
        return 'android';
      } else if (navigator.userAgent.match(/Mac/i)) {
        return 'mac';
      }
    },
    startPlayer: function () {
      var deviceType = self.getDeviceType();

      axios.get('/api/v1/aquaplayer', {
        params: {
          device: deviceType,
          video: this.options.videoUrl,
          training_user_id: this.options.trainingUserId,
          course_id: this.options.courseId,
          course_list_id: this.options.courseListId
        }
      })
      .then(function (res) {
        console.log(res.data);
        if (deviceType === 'ios') {
          var time = (new Date()).getTime();
          console.log(res.data.iosUrl);
          window.location.href = res.data.iosUrl;

          setTimeout(function () {
            setTimeout(function () {
              var now = (new Date()).getTime();
              if ((now - time) < 400) {
                window.location = 'https://itunes.apple.com/kr/app/aquanmanager/id1048325731';
              }
            }, 10);
          }, 300);
        } else if (deviceType === 'android') {
          console.log(res.data.androidUrl);
          window.location.href = res.data.androidUrl;
        }
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  };

  return AquaNManagerService;
});
