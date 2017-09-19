"use strict";requirejs(["jquery","axios","Vimeo","easyTimer","jqueryTimer"],function(n,e,o){function t(){var n={loop:!1};m=new o("videoplayer",n),m.setVolume(.5),m.ready().then(function(){console.info("Player is ready."),m.getDuration().then(function(n){b=n,i()}).catch(function(n){console.error(n)}),k<b-5&&window.confirm("마지막 재생시점으로 이동하시겠습니까?")&&m.setCurrentTime(k).then(function(n){m.pause()}).catch(function(n){console.error(n)})}).catch(function(n){console.error(n)})}function i(){b?(g=n.timer(1e3*y,a,!0),g.stop(),r()):console.error("재생시간을 확인할 수 없습니다.")}function r(){c(D)}function c(n){Math.floor(b*(j/100))<=n&&(P.removeClass("blind"),S.addClass("blind"))}function a(){w+=y,m.getCurrentTime().then(function(e){return _>0&&_===e?void m.pause().then(function(){console.log("비디오가 중지되었습니다."),S.removeClass("blind")}).catch(function(n){console.error(n)}):(_=e,void n.ajax({type:"POST",url:"/video/log/playtime",data:{training_user_id:V,video_id:q,played_seconds:w,video_duration:b,currenttime:e}}).done(function(n){n.success?(w=0,D=n.total_played_seconds,c(D)):(console.error(n.msg),m.pause().then(function(){}).catch(function(n){console.error(n)}))}))}).catch(function(n){console.error(n)})}function s(){n.ajax({type:"POST",url:"/video/log/endtime",data:{video_id:q}}).done(function(n){n.success||console.error(n.msg)})}function u(){n.ajax({type:"POST",url:"/session/log/starttime",data:{training_user_id:V,course_id:E,course_list_id:M}}).done(function(n){n.success?C=n.hasEnded:(console.error(n.msg),g.stop(),m.stop())})}function l(){n.ajax({type:"POST",url:"/session/log/endtime",data:{training_user_id:V,course_id:E,course_list_id:M}}).done(function(n){n.success?window.location.href=O:(console.error(n.msg),g.stop(),m.stop())})}function d(){T-=1,x.html(" ( "+T+" 초 이내 클릭 )"),T<=0&&(v.stop(),window.alert("비디오를 재시청 해주시기 바랍니다."),e.all([f(),p()]).then(e.spread(function(n,e){window.location.reload()})))}function f(){return e.delete("/video/log",{params:{video_id:q}}).then(function(n){}).catch(function(n){console.error(n)})}function p(){return e.delete("/session/log",{params:{training_user_id:V,course_list_id:M}}).then(function(n){}).catch(function(n){console.error(n)})}var _,m=null,h=n(".videoplayer"),y=h.data("interval"),g=null,v=null,w=0,T=h.data("wait-seconds"),j=h.data("passive-rate"),b=null,x=n(".wait-message"),C=!1,P=n("#btn_play_next"),O=P.parent().attr("href"),S=n("#btn_replay_video"),q=h.data("id"),D=h.data("total-play"),k=h.data("current-time"),V=P.data("training-user-id"),E=P.data("course-id"),M=P.data("course-list-id");n(function(){t()}),P.on("click",function(n){n.preventDefault(),l()}),m.on("play",function(n){u(),g.reset(1e3*y)}),m.on("error",function(n){console.info("error!"),console.error(n)}),m.on("pause",function(n){console.info("player: pause"),g.pause(),s()}),m.on("ended",function(e){console.info("player: ended"),g.pause(),c(D+y),s(),C||setTimeout(function(){v=n.timer(1e3,d,!0)},3e3)}),S.on("click",function(n){n.preventDefault(),m.unload().then(function(){S.addClass("blind")}).catch(function(n){console.log(n)})})});
//# sourceMappingURL=../maps/video.js.map
